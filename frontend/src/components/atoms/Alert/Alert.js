import React from 'react'
import { node, string } from 'prop-types'
import clsx from 'clsx'

const Alert = ({ variant, children }) => {
  const alertClass = clsx('alert', `alert-${variant}`)

  return <div className={alertClass}>{children}</div>
}

Alert.defaultProps = {
  variant: 'success',
}

Alert.propTypes = {
  children: node.isRequired,
  variant: string,
}

export default Alert
