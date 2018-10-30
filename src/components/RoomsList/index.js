import React from 'react'
import { FlatList } from 'react-native'
import { RoomPreview } from '../RoomPreview'

export class RoomsList extends React.PureComponent {
    renderItem = ({ item }) => (
        <RoomPreview
            room={item}
            onPress={() => this.props.onPressRoom(item.id)}
        />
    )

    render() {
        const { rooms } = this.props

        return (
            <FlatList
                data={rooms}
                keyExtractor={item => item.id}
                renderItem={this.renderItem}
                removeClippedSubviews={false}
            />
        )
    }
}
