import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

export class PanelBooking extends React.PureComponent {
    render() {
        const {
            roomSelectedId,
            dateSelected,
            startDate,
            endDate,
            bookedBy,
        } = this.props

        return (
            <View
                style={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    height: 120,
                    padding: 10,
                    backgroundColor: 'white',
                }}
            >
                <Text>{roomSelectedId}</Text>
                <Text>{dateSelected}</Text>
                <Text>{startDate}</Text>
                <Text>{endDate}</Text>
                {!!bookedBy ? (
                    <Text>Reservado por {bookedBy}</Text>
                ) : (
                    <TouchableHighlight>
                        <Text>Reservar</Text>
                    </TouchableHighlight>
                )}
            </View>
        )
    }
}
