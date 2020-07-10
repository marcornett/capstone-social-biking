import { applyMiddleware, compose, createStore } from 'redux'
// Redux Store Configure: https://redux.js.org/recipes/configuring-your-store/

import thunkMiddleware from 'redux-thunk'
// Redux Thunk: https://github.com/reduxjs/redux-thunk

import rootReducer from './reducers'

export default function configureStore(preloadedState) {
    const middlewares = [
        // loggerMiddleware, 
        thunkMiddleware
    ]
    const middlewareEnhancer = applyMiddleware(...middlewares)

    const enhancers = [
        middlewareEnhancer,
        // monitorReducersEnhancer
    ]
    const composedEnhancers = compose(...enhancers)

    const store = createStore(rootReducer, preloadedState, composedEnhancers)

    return store
}