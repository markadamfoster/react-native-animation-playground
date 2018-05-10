import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Animated
} from 'react-native'
import styled from 'styled-components'
import ResetButton from '../Common/ResetButton'

export default class Scale extends React.Component {
  state = {
    xVal: new Animated.Value(1),
    yVal: new Animated.Value(1)
  }

  animateBox = () => {
    Animated.timing(this.state.xVal, {
      toValue: 2,
      duration: 400
    }).start()

    Animated.timing(this.state.yVal, {
      toValue: 1.2,
      duration: 400
    }).start()
  }

  resetAnimation = () => {
    Animated.timing(this.state.xVal, {
      toValue: 1,
      duration: 400
    }).start()

    Animated.timing(this.state.yVal, {
      toValue: 1,
      duration: 400
    }).start()
  }

  render() {
    const animatedStyles = {
      transform: [{ scaleX: this.state.xVal }, { scaleY: this.state.yVal }]
    }
    return (
      <Container>
        <ResetButton onPress={this.resetAnimation} />
        <TouchableWithoutFeedback onPress={this.animateBox}>
          <Box style={animatedStyles} />
        </TouchableWithoutFeedback>
      </Container>
    )
  }
}

const Container = styled.View`
  padding: 30px;
  align-items: center;
  justify-content: center;
`

const Box = styled(Animated.View)`
  height: 150px;
  width: 150px;
  background-color: tomato;
`
