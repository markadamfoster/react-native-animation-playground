import { StackNavigator } from 'react-navigation'

import { colors } from './Constants'
import HomeScreen from './HomeScreen'
import AnimatingProperties from './AnimatingProperties/AnimatingPropertiesScreen'
import AnimatedFunctions from './AnimatedFunctions/AnimatedFunctionsScreen'
import AnimFuncEvent from './AnimatedFunctions/_Event'
import AnimFuncDecay from './AnimatedFunctions/_Decay'
import CombiningAnimations from './CombiningAnimations/CombiningAnimationsScreen'

export default StackNavigator(
  {
    Home: { screen: HomeScreen },
    AnimatingProperties: { screen: AnimatingProperties },
    AnimatedFunctions: { screen: AnimatedFunctions },
    AnimFuncEvent: { screen: AnimFuncEvent },
    AnimFuncDecay: { screen: AnimFuncDecay },
    CombiningAnimations: { screen: CombiningAnimations }
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
