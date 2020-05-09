export const withThenCatch = (promise) => promise.then((response) => ({ response })).catch((error) => ({ error }))
