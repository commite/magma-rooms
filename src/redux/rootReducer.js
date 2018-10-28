import { combineReducers } from 'redux'

import { usersReducer } from './users'
import { rooomsReducer } from './rooms'

export const rootReducer = combineReducers({
    users: usersReducer,
    rooms: rooomsReducer,
})
export default rootReducer
