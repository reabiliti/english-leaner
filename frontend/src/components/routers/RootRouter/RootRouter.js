import React from 'react'
import { Route, Switch } from 'react-router-dom'

import DefaultLayout from '../../templates/DefaultLayout'
import NotFoundPage from '../../pages/NotFoundPage'
import RootPage from '../../pages/RootPage'
import TranslationTrainingPage from '../../pages/TranslationTrainingPage'

import { ROOT_PATH, TRANSLATION_TRAINING_PATH } from '../../../constants/routes'

const RootRouter = () => (
  <DefaultLayout>
    <Switch>
      <Route path={ROOT_PATH} exact>
        <RootPage />
      </Route>
      <Route path={TRANSLATION_TRAINING_PATH}>
        <TranslationTrainingPage />
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  </DefaultLayout>
)

export default RootRouter
