import React from 'react'
import { Route, Switch } from 'react-router-dom'

import DefaultLayout from '../../templates/DefaultLayout'
import NotFoundPage from '../../pages/NotFoundPage'
import RootPage from '../../pages/RootPage'

import { ROOT_PATH } from '../../../constants/routes'

const RootRouter = () => (
  <DefaultLayout>
    <Switch>
      <Route path={ROOT_PATH} exact>
        <RootPage />
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  </DefaultLayout>
)

export default RootRouter
