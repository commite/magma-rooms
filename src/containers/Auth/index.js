import React from 'react'
import { View } from 'react-native'
import { GoogleSigninButton } from 'react-native-google-signin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { googleLogin } from '../../redux/users'

@connect(
    state => ({}),
    dispatch =>
        bindActionCreators(
            {
                googleLogin,
            },
            dispatch
        )
)
export class Auth extends React.PureComponent {
    login = () => {
        this.props
            .googleLogin()
            .then(() => {
                this.props.navigation.navigate('App')
            })
            .catch(error => console.log(error))
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
                <GoogleSigninButton
                    style={{ width: 48, height: 48 }}
                    size={GoogleSigninButton.Size.Icon}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={this.login}
                    disabled={false}
                />
            </View>
        )
    }
}
