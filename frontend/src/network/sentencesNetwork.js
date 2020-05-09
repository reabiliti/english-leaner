import client from './client'

import { withThenCatch } from '../helpers/networkHelper'

import { RANDOM_SENTENCES_API } from '../constants/api'

export const clientGetRandomSentence = () => withThenCatch(client.get(RANDOM_SENTENCES_API))
