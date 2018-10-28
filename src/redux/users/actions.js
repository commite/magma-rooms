import firebase from 'react-native-firebase'
import { GoogleSignin } from 'react-native-google-signin'
import * as CONSTANTS from './constants'

export const googleLogin = () => {
    return async dispatch => {
        dispatch({ type: CONSTANTS.LOGIN_R })
        try {
            await GoogleSignin.configure()

            const data = await GoogleSignin.signIn()

            const credential = firebase.auth.GoogleAuthProvider.credential(
                data.idToken,
                data.accessToken
            )

            const currentUser = await firebase
                .auth()
                .signInWithCredential(credential)

            dispatch({
                type: CONSTANTS.LOGIN_S,
                payload: {
                    user: {
                        id: currentUser.user.uid,
                        name: currentUser.user.displayName,
                        avatar: currentUser.user.photoURL,
                    },
                },
            })

            return true
        } catch (error) {
            dispatch({
                type: CONSTANTS.LOGIN_F,
                payload: {
                    error,
                },
            })
            throw error
        }
    }
}

export const logout = () => dispatch => {
    return firebase
        .auth()
        .signOut()
        .then(() => {
            dispatch({
                type: CONSTANTS.LOGOUT,
            })
        })
        .catch(({ code, message }) => {
            console.log(message)
        })
}
