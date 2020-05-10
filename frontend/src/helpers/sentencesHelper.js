import { compose, join, path, pathOr, pluck } from 'ramda'

export const getSentenceInfo = (sentence) => {
  if (!sentence) return ''

  const themes = compose(join(', '), pluck('name'), pathOr([], ['themes']))(sentence)

  return `#${path(['id'], sentence)}, ${themes}`
}
