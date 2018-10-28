// @flow
import React from 'react'
import { FlatList, View, Text } from 'react-native'

export class RoomsList extends React.PureComponent {
    renderItem = ({ item }) => (
        <View>
            <Text>{item.name}</Text>
        </View>
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
