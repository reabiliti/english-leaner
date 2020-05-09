import React from 'react'
import { node } from 'prop-types'

import Footer from '../../molecules/Footer'
import Header from '../../molecules/Header'

import './default-layout.scss'

const DefaultLayout = ({ children }) => (
  <>
    <Header />
    <main className='default-layout'>
      <div className='container py-5'>{children}</div>
    </main>
    <Footer />
  </>
)

DefaultLayout.propTypes = {
  children: node.isRequired,
}

export default DefaultLayout
