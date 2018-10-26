import { combineReducers } from 'redux'

import { interfaceReducer } from './interface'

export const rootReducer = combineReducers({
    interface: interfaceReducer,
})
export default rootReducer
