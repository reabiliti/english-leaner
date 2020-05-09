import { path } from 'ramda'

export const withThenCatch = (promise) => promise.then((response) => ({ response })).catch((error) => ({ error }))
export const getResponseDataField = (fieldName) => path(['data', fieldName])
export const getResponseErrorMessage = (error) => path(['response', 'data', 'error'], error) || path(['message'], error)
