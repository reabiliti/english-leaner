import React, { useEffect, useState } from 'react'
import { pathOr } from 'ramda'

import Alert from '../../atoms/Alert'
import InfoBtnSm from '../../atoms/Buttons/InfoBtnSm'
import SentenceRow from '../../atoms/Rows/SentenceRow'

import { clientGetRandomSentence } from '../../../network/sentencesNetwork'
import { getResponseDataField, getResponseErrorMessage } from '../../../helpers/networkHelper'
import { getSentenceInfo } from '../../../helpers/sentencesHelper'

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
        <InfoBtnSm label='next random' onClick={fetchData} />
      </h4>
      {requestError && <Alert variant='danger'>{requestError}</Alert>}
      <SentenceRow label='Info:'>{getSentenceInfo(sentence)}</SentenceRow>
      <SentenceRow label='Russian:'>{pathOr('N/A', ['russian'], sentence)}</SentenceRow>
      <SentenceRow label='English:'>
        {isShowEnglish && pathOr('N/A', ['english'], sentence)}
        {!isShowEnglish && <InfoBtnSm label='show' onClick={() => setIsShowEnglish(true)} />}
      </SentenceRow>
    </>
  )
}

export default TranslationTrainingPage
