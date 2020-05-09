import React from 'react'
import { node, string } from 'prop-types'
import clsx from 'clsx'

const SentenceRow = ({ children, label, labelStyles }) => {
  const calculatedLabelStyles = clsx('col-md-1', labelStyles)

  return (
    <div className='row pb-4'>
      <div className={calculatedLabelStyles}>{label}</div>
      <div className='col-md-11'>{children}</div>
    </div>
  )
}

SentenceRow.defaultProps = {
  labelStyles: null,
}

SentenceRow.propTypes = {
  children: node.isRequired,
  label: string.isRequired,
  labelStyles: string,
}

export default SentenceRow
