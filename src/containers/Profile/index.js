import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { TouchableHighlight, View, Text } from 'react-native'
import { logout } from '../../redux/users'

@connect(
    state => ({
        me: state.users.byId[state.users.me],
    }),
    dispatch =>
        bindActionCreators(
            {
                logout,
            },
            dispatch
        )
)
export class Profile extends React.PureComponent {
    static navigationOptions = {
        title: 'Profile',
    }
    logout = () => {
        const { logout, navigation } = this.props

        logout().then(() => {
            navigation.navigate('AuthLoading')
        })
    }
    render() {
        const { me } = this.props

        if (!me) {
            return <Text>Loading</Text>
        }
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text>Hola, {me.name}</Text>

                <TouchableHighlight onPress={this.logout}>
                    <Text>Logout</Text>
                </TouchableHighlight>
            </View>
        )
    }
}
