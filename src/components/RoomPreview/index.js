import React from 'react'
import { Button, Title } from './styles'

export class RoomPreview extends React.PureComponent {
    render() {
        const { room, onPress } = this.props

        return (
            <Button onPress={() => onPress(room.id)}>
                <Title>{room.name}</Title>
            </Button>
        )
    }
}
