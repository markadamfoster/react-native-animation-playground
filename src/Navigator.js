import { StackNavigator } from 'react-navigation'

import { colors } from './Constants'
import HomeScreen from './HomeScreen'
import AnimatingProperties from './AnimatingProperties/AnimatingPropertiesScreen'
import AnimatedFunctions from './AnimatedFunctions/AnimatedFunctionsScreen'
import AnimFuncEvent from './AnimatedFunctions/_Event'
import AnimFuncDecay from './AnimatedFunctions/_Decay'
import CombiningAnimations from './CombiningAnimations/CombiningAnimationsScreen'
import Interpolation from './Interpolation/InterpolationScreen'
import FourCorners from './FourCorners/FourCorners'
import StaggeredHeads from './StaggeredHeads/StaggeredHeads'
import StaggeredFormElements from './StaggeredFormElements/StaggeredFormElements'
import ProgressBar from './ProgressBar/ProgressBar'
import Notifications from './Notifications/Notifications'
import Questionnaire from './Questionnaire/Questionnaire'
import PhotoGrid from './PhotoGrid/PhotoGrid'
import ColorPicker from './ColorPicker/ColorPicker'

export default StackNavigator(
  {
    Home: { screen: HomeScreen },
    AnimatingProperties: { screen: AnimatingProperties },
    AnimatedFunctions: { screen: AnimatedFunctions },
    AnimFuncEvent: { screen: AnimFuncEvent },
    AnimFuncDecay: { screen: AnimFuncDecay },
    CombiningAnimations: { screen: CombiningAnimations },
    Interpolation: { screen: Interpolation },
    FourCorners: { screen: FourCorners },
    StaggeredHeads: { screen: StaggeredHeads },
    FormElements: { screen: StaggeredFormElements },
    ProgressBar: { screen: ProgressBar },
    Notifications: { screen: Notifications },
    Questionnaire: { screen: Questionnaire },
    PhotoGrid: { screen: PhotoGrid },
    ColorPicker: { screen: ColorPicker }
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
