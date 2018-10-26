import { createSwitchNavigator, createStackNavigator } from 'react-navigation'

import { AuthLoading } from '../containers/AuthLoading'
import { Auth } from '../containers/Auth'
import { Home } from '../containers/Home'

const AppStack = createStackNavigator({ Home: Home })

export const Navigator = createSwitchNavigator(
    {
        AuthLoading: AuthLoading,
        App: AppStack,
        Auth: Auth,
    },
    {
        initialRouteName: 'AuthLoading',
    }
)
