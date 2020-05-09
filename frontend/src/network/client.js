import axios from 'axios'

import { API_ROOT_URL } from '../constants/api'

const client = axios.create({
  baseURL: API_ROOT_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default client
