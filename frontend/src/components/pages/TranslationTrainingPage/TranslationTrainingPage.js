import React, { useEffect, useState } from 'react'
import { clientGetRandomSentence } from '../../../network/sentencesNetwork'

const TranslationTrainingPage = () => {
  const [sentence, setSentence] = useState(null)

  useEffect(() => {
    const { response, error } = clientGetRandomSentence()
    console.log(response, error)
  }, [])

  return (
    <>
      {sentence && <div>{sentence.russian}</div>}
      {!sentence && <div>Get random sentence</div>}
    </>
  )
}

export default TranslationTrainingPage
