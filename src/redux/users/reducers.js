import * as CONSTANTS from './constants'

const initialState = {
    me: undefined,
    byId: {},
    authIsLoading: false,
    authError: undefined,
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.LOGIN_R: {
            return {
                ...state,
                me: undefined,
                authIsLoading: true,
                authError: undefined,
            }
        }
        case CONSTANTS.LOGIN_S: {
            const { user } = action.payload
            return {
                ...state,
                me: user.id,
                byId: {
                    ...state.byId,
                    [user.id]: user,
                },
                authIsLoading: false,
                authError: undefined,
            }
        }
        case CONSTANTS.LOGIN_F: {
            const { error } = action.payload
            return {
                ...state,
                authIsLoading: false,
                authError: error,
            }
        }
        case CONSTANTS.LOGOUT: {
            return {
                ...state,
                me: undefined,
            }
        }
        default:
            return state
    }
}
