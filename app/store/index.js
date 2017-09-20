import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducer from './reducer'

const configureStore = () => {
  const middleware = [thunk]
  return createStore(reducer, applyMiddleware(...middleware))
}

export { configureStore }
