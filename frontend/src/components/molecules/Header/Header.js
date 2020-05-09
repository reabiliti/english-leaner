import React from 'react'
import { NavLink } from 'react-router-dom'

import NavItemLink from '../../atoms/NavBar/NavItemLink'

import { ROOT_PATH, TRANSLATION_TRAINING_PATH } from '../../../constants/routes'

const Header = () => (
  <nav className='navbar navbar-expand-lg navbar-light bg-light'>
    <NavLink className='navbar-brand mr-auto' to={ROOT_PATH}>
      Main Page
    </NavLink>
    <div className='navbar-nav'>
      <NavItemLink toPath={TRANSLATION_TRAINING_PATH} label='Translation Training (Beta)' />
    </div>
  </nav>
)

export default Header
