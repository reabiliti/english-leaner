import React, { useEffect, useState } from 'react'
import { path } from 'ramda'

import Alert from '../../atoms/Alert'
import InfoBtnSm from '../../atoms/Buttons/InfoBtnSm'
import SentenceRow from '../../atoms/Rows/SentenceRow'

import { clientGetRandomSentence } from '../../../network/sentencesNetwork'
import { getResponseDataField, getResponseErrorMessage } from '../../../helpers/networkHelper'

const TranslationTrainingPage = () => {
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

  return (
    <>
      <h4 className='pb-3'>
        <span className='mr-2'>Sentence</span>
        <InfoBtnSm label='Get random' onClick={fetchData} />
      </h4>
      {requestError && <Alert variant='danger'>{requestError}</Alert>}
      {sentence && (
        <>
          <SentenceRow label='Russian:'>{path(['russian'], sentence)}</SentenceRow>
          <SentenceRow label='English:'>
            {isShowEnglish && path(['english'], sentence)}
            {!isShowEnglish && <InfoBtnSm label='Show' onClick={() => setIsShowEnglish(true)} />}
          </SentenceRow>
        </>
      )}
    </>
  )
}

export default TranslationTrainingPage
