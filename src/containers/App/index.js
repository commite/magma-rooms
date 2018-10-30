import {
    createStackNavigator,
    createBottomTabNavigator,
} from 'react-navigation'

import { Rooms } from '../Rooms'
import { Room } from '../Room'
import { Profile } from '../Profile'
import { Calendar } from '../Calendar'

const Tabs = createBottomTabNavigator(
    {
        Rooms: Rooms,
        Calendar: Calendar,
        Profile: Profile,
    },
    {
        initialRouteName: 'Rooms',
    }
)

export const App = createStackNavigator(
    {
        Tabs,
        Room,
    },
    {
        initialRouteName: 'Tabs',
    }
)
