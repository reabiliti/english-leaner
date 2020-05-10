import React from 'react'
import { pathOr } from 'ramda'

import Alert from '../../atoms/Alert'
import InfoBtnSm from '../../atoms/Buttons/InfoBtnSm'
import SentenceRow from '../../atoms/Rows/SentenceRow'

import { getSentenceInfo } from '../../../helpers/sentencesHelper'
import useRandomSentence from '../../../hooks/useRandomSentence'

const TranslationTrainingPage = () => {
  const { functions, state } = useRandomSentence()
  const { isShowEnglish, requestError, sentence } = state
  const { fetchData, setIsShowEnglish } = functions

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
