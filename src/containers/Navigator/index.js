import { createSwitchNavigator } from 'react-navigation'

import { AuthLoading } from '../AuthLoading'
import { Auth } from '../Auth'
import { App } from '../App'

export const Navigator = createSwitchNavigator(
    {
        AuthLoading: AuthLoading,
        Auth: Auth,
        App: App,
    },
    {
        initialRouteName: 'AuthLoading',
        headerMode: 'none',
    }
)
