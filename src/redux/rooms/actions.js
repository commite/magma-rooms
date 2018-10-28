import firebase from 'react-native-firebase'
import * as CONSTANTS from './constants'

export const getRooms = () => async dispatch => {
    dispatch({ type: CONSTANTS.GET_ROOMS_R })

    try {
        const roomsSnapshoot = await firebase
            .firestore()
            .collection('Rooms')
            .get()
        let rooms = {}
        roomsSnapshoot.forEach(function(roomSnapshooot) {
            rooms = {
                ...rooms,
                [roomSnapshooot.id]: {
                    ...roomSnapshooot.data(),
                },
            }
        })
        dispatch({ type: CONSTANTS.GET_ROOMS_S, payload: { rooms } })
    } catch (error) {
        dispatch({ type: CONSTANTS.GET_ROOMS_F, payload: { error } })
    }
}
