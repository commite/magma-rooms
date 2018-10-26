import React, { Component } from 'react'
import firebase from 'react-native-firebase'
import { View, Text } from 'react-native'

export class AuthLoading extends Component {
    componentDidMount() {
        firebase
            .auth()
            .signInAnonymously()
            .then(() => {
                console.log('logged')
            })
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Text>AuthLoading</Text>
            </View>
        )
    }
}
