import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Animated
} from 'react-native'

// import Anim from './animations/Opacity'
// import Anim from './animations/TranslatePosition'
// import Anim from './animations/Scale'
// import Anim from './animations/WidthHeight'
// import Anim from './animations/AbsolutePosition'
// import Anim from './animations/Color'
// import Anim from './animations/Rotation'
import Anim from './animations/WidthHeightPercentage'

export default class App extends React.Component {
  render() {
    return <Anim />
  }
}
