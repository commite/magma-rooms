import * as CONSTANTS from './constants'

const initialState = {
    byId: {},
    isLoading: false,
    error: undefined,
}

export const rooomsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.GET_ROOMS_R: {
            return {
                ...state,
                isLoading: true,
                error: undefined,
            }
        }
        case CONSTANTS.GET_ROOMS_S: {
            const { rooms } = action.payload
            return {
                ...state,
                byId: {
                    ...state.byId,
                    ...rooms,
                },
                isLoading: false,
                error: undefined,
            }
        }
        case CONSTANTS.GET_ROOMS_F: {
            const { error } = action.payload
            return {
                ...state,
                isLoading: false,
                error: error,
            }
        }
        default:
            return state
    }
}
