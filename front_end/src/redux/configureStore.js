// Redux Store Configure: https://redux.js.org/recipes/configuring-your-store/
import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
// Redux Thunk: https://github.com/reduxjs/redux-thunk
import { composeWithDevTools } from 'redux-devtools-extension'

import monitorReducersEnhancer from './middleware/enhancers/monitorReducer'
// import loggerMiddleware from './middleware/logger'
import rootReducer from './reducers'

export default function configureStore(preloadedState) {
    const middlewares = [
        // loggerMiddleware, 
        thunkMiddleware
    ]
    const middlewareEnhancer = applyMiddleware(...middlewares)

    const enhancers = [
        middlewareEnhancer,
        monitorReducersEnhancer
    ]
    const composedEnhancers = composeWithDevTools(...enhancers)

    const store = createStore(rootReducer, preloadedState, composedEnhancers)

    return store
}