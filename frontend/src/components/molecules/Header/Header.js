import React from 'react'
import { NavLink } from 'react-router-dom'

import { ROOT_PATH } from '../../../constants/routes'

const Header = () => (
  <nav className='navbar navbar-expand-lg navbar-light bg-light'>
    <NavLink className='navbar-brand mr-auto' to={ROOT_PATH}>
      Main Page
    </NavLink>
    <div className='navbar-nav' />
  </nav>
)

export default Header
