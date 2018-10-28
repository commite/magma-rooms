import React from 'react'
import { connect } from 'react-redux'
import { ActivityIndicator, StatusBar, View } from 'react-native'

@connect(state => ({
    me: state.users.me,
}))
export class AuthLoading extends React.Component {
    constructor(props) {
        super(props)
        this.bootstrapAsync()
    }

    bootstrapAsync = async () => {
        const { me } = this.props
        const initialRoute = !!me ? 'App' : 'Auth'
        this.props.navigation.navigate(initialRoute)
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
                <ActivityIndicator size="large" />
                <StatusBar barStyle="default" />
            </View>
        )
    }
}
