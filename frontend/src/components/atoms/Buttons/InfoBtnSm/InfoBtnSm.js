import React from 'react'
import { func, string } from 'prop-types'

const InfoBtnSm = ({ label, onClick }) => {
  return (
    <button className='btn btn-info btn-sm' type='button' onClick={onClick}>
      {label}
    </button>
  )
}

InfoBtnSm.propTypes = {
  label: string.isRequired,
  onClick: func.isRequired,
}

export default InfoBtnSm
