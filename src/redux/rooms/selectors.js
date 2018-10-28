import { createSelector } from 'reselect'

const roomsSelectorById = state => state.rooms.byId

const all = createSelector(roomsSelectorById, roomsById => {
    const rooms = []
    for (const id in roomsById) {
        let room = roomsById[id]
        rooms.push({
            id,
            ...room,
        })
    }
    return rooms
})

export const roomsSelector = {
    all,
}
