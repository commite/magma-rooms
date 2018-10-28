import { createBottomTabNavigator } from 'react-navigation'

import { Rooms } from '../Rooms'
import { Profile } from '../Profile'

export const App = createBottomTabNavigator(
    {
        Rooms: Rooms,
        Profile: Profile,
    },
    {
        initialRouteName: 'Rooms',
    }
)
