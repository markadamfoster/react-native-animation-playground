import { StackNavigator } from 'react-navigation'

import { colors } from './Constants'
import HomeScreen from './HomeScreen'
import AnimatingProperties from './AnimatingProperties/Screen'

export default StackNavigator(
  {
    Home: { screen: HomeScreen },
    AnimatingProperties: { screen: AnimatingProperties }
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.dark
      },
      headerTintColor: colors.light,
      headerTitleStyle: {
        fontWeight: 'bold',
        color: colors.light
      }
    }
  }
)
