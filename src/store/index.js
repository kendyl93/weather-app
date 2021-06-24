import { applyMiddleware, createStore, compose } from "redux"
import thunkMiddleware from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { createLogger } from "redux-logger"
import rootReducer from "./rootReducer"
import ENV from "../env"

const DEVELOPMENT = "development"

const configureStore = (preloadedState = {}) => {
  const logger = createLogger({
    predicate: () => ENV.NODE_ENV === DEVELOPMENT,
  })

  const middlewares = [thunkMiddleware, logger]
  const middlewareEnhancer = composeWithDevTools(applyMiddleware(...middlewares))

  const enhancers = [middlewareEnhancer]
  const composedEnhancers = compose(...enhancers)

  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  return store
}

export default configureStore
