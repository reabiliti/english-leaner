import React from 'react'
import { func, string } from 'prop-types'

const NavItemButton = ({ onClick, label }) => (
  <div className='nav-item'>
    <button className='nav-link button-link' type='button' onClick={onClick}>
      {label}
    </button>
  </div>
)

NavItemButton.propTypes = {
  onClick: func.isRequired,
  label: string.isRequired,
}

export default NavItemButton
