import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getRooms, roomsSelector } from '../../redux/rooms'
import { RoomsList } from '../../components/RoomsList'

@connect(
    state => ({
        isLoading: state.rooms.isLoading,
        rooms: roomsSelector.all(state),
    }),
    dispatch => bindActionCreators({ getRooms }, dispatch)
)
export class Rooms extends React.PureComponent {
    componentDidMount() {
        this.props.getRooms()
    }

    onPressRoom = roomId => this.props.navigation.navigate('Room', { roomId })

    render() {
        const { rooms } = this.props
        return <RoomsList rooms={rooms} onPressRoom={this.onPressRoom} />
    }
}
