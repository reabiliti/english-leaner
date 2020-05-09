import React from 'react'
import { string } from 'prop-types'
import { NavLink } from 'react-router-dom'

const NavItemLink = ({ toPath, label }) => (
  <div className='nav-item'>
    <NavLink className='nav-link' to={toPath}>
      {label}
    </NavLink>
  </div>
)

NavItemLink.propTypes = {
  toPath: string.isRequired,
  label: string.isRequired,
}

export default NavItemLink
