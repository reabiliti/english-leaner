import { useEffect, useState } from 'react'

import { clientGetRandomSentence } from '../network/sentencesNetwork'
import { getResponseDataField, getResponseErrorMessage } from '../helpers/networkHelper'

const useRandomSentence = () => {
  const [sentence, setSentence] = useState(null)
  const [requestError, setRequestError] = useState(null)
  const [isShowEnglish, setIsShowEnglish] = useState(false)

  const fetchData = async () => {
    const { response, error } = await clientGetRandomSentence()
    if (response) {
      setSentence(getResponseDataField('sentence')(response))
      setIsShowEnglish(false)
      setRequestError(null)
    } else {
      setSentence(null)
      setRequestError(getResponseErrorMessage(error))
    }
  }

  useEffect(() => {
    fetchData().then()
  }, [])

  return {
    functions: {
      fetchData,
      setIsShowEnglish,
    },
    state: {
      sentence,
      requestError,
      isShowEnglish,
    },
  }
}

export default useRandomSentence
