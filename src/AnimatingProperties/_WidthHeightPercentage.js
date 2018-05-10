import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Animated,
  Easing,
  Dimensions
} from 'react-native'
import styled from 'styled-components'
import ResetButton from '../Common/ResetButton'

export default class TranslatePosition extends React.Component {
  state = {
    animatedVal: new Animated.Value(0),
    resetDisabled: true
  }

  startAnimation = () => {
    Animated.timing(this.state.animatedVal, {
      toValue: 1,
      duration: 300,
      // easing: Easing.back(2)
      easing: Easing.bounce
      // easing: Easing.elastic(2)
      // easing: Easing.ease
    }).start()

    this.setState({ resetDisabled: false })
  }

  resetAnimation = () => {
    Animated.timing(this.state.animatedVal, {
      toValue: 0,
      duration: 200,
      easing: Easing.bounce
    }).start()

    this.setState({ resetDisabled: true })
  }

  render() {
    const widthInterpolated = this.state.animatedVal.interpolate({
      inputRange: [0, 1],
      outputRange: ['20%', '80%']
    })
    const heightInterpolate = this.state.animatedVal.interpolate({
      inputRange: [0, 1],
      outputRange: ['20%', '50%']
    })

    const animatedStyles = {
      width: widthInterpolated,
      height: heightInterpolate
    }

    return (
      <Container>
        <ResetButton
          onPress={this.resetAnimation}
          disabled={this.state.resetDisabled}
        />
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Box style={animatedStyles} />
        </TouchableWithoutFeedback>
      </Container>
    )
  }
}

const Container = styled.View`
  flex: 1;
  height: ${Dimensions.get('window').height * 0.85};
  width: ${Dimensions.get('window').width};
  padding: 30px;
  justify-content: center;
  align-items: center;
`

const Box = styled(Animated.View)`
  background-color: tomato;
`
