# frozen_string_literal: true

RSpec::Matchers.define(:deep_equal) do |expected|
  # Deep match only equals objects
  # Found there https://gist.github.com/mltsy/21fd5e15ae12a004c8b13d6ec4534458 and added some changes
  # For example we have some spec:
  # expect(query_result).to deep_include(
  #   tickets: {
  #     edges: [
  #       {
  #         node: {
  #           id: kind_of(String)
  #         }
  #       },
  #       {
  #         node: {
  #           id: kind_of(String)
  #         }
  #       },
  #     ]
  #   }
  # )
  #
  # for this one query_result:
  # #<RecursiveOpenStruct tickets={"edges"=>[{"node"=>{"id"=>"1"}}, {"node"=>{"id"=>"2"}}]}>
  #
  match do |actual|
    object = actual.is_a?(OpenStruct) ? actual.to_h : actual
    deep_equal?(object, expected)
  end

  def deep_equal?(actual, expected, path = [])
    return true if expected === actual

    @failing_path = path
    @failing_expected = expected
    @failing_actual = actual

    if actual.is_a?(Array)
      return false unless expected.is_a?(Array)
      return false unless expected.count == actual.count

      actual.each_with_index do |actual_item, index|
        match_found = expected.any? do |expected_item|
          deep_equal?(actual_item, expected_item, path + [index])
        end
        next if match_found

        @failing_array = expected
        @failing_array_path = path + [index]
        @failing_actual_array_item = actual_item
        return false
      end
    elsif actual.is_a?(Hash)
      return false unless expected.is_a?(Hash)
      # added to compare keys to not dependent on order
      return false unless actual.keys & expected.keys == actual.keys

      expected.all? do |key, expected_value|
        return false unless actual.key?(key)

        deep_equal?(actual[key], expected_value, path + [key])
      end
    else
      false
    end
  end

  def failing_array_paths(actual_item)
    @failing_array = actual_item
    @failing_array_path = path + [index]
    @failing_actual_array_item = expected
    false
  end

  failure_message do |_actual|
    if @failing_array_path
      path = @failing_array_path.map { |p| "[#{p.inspect}]" }.join
      path = 'root' if path.blank?
      message = "Actual array did not include value at #{path}: \n" \
        "  expected #{@failing_actual_array_item.inspect}\n" \
        "  but matching value not found in array: #{@failing_array}\n"
    else
      path = @failing_path.map{ |p| "[#{p.inspect}]" }.join
      path = 'root' if path.blank?
      message = "Actual hash did not include expected value at #{path}: \n" \
        "  expected #{@failing_expected.inspect}\n" \
        "  got #{@failing_actual.inspect}\n"
    end

    message
  end
end
