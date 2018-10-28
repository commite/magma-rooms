import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './redux/rootReducer'
import thunk from 'redux-thunk'

const middlewares = applyMiddleware(thunk)

export const configureStore = () => {
    const store = createStore(
        rootReducer,
        __DEV__ ? composeWithDevTools(middlewares) : middlewares
    )

    if (module.hot) {
        module.hot.accept(() => {
            const nextRootReducer = require('./redux/rootReducer').default
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}
