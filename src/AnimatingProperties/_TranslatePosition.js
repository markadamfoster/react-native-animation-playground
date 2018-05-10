import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Animated
} from 'react-native'
import styled from 'styled-components'

export default class TranslatePosition extends Component {
  state = {
    xVal: new Animated.Value(0)
  }

  startAnimation = () => {
    Animated.timing(this.state.xVal, {
      toValue: -1000,
      duration: 350
    }).start()
  }

  resetAnimation = () => {
    Animated.timing(this.state.xVal, {
      toValue: 0,
      duration: 350
    }).start()
  }

  render() {
    const animatedStyles = {
      transform: [
        {
          translateX: this.state.xVal
        }
      ]
    }

    return (
      <Container>
        <ResetButton>
          <TouchableWithoutFeedback onPress={this.resetAnimation}>
            <Reset>Reset</Reset>
          </TouchableWithoutFeedback>
        </ResetButton>

        <TouchableWithoutFeedback onPress={this.startAnimation}>
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
  width: 150px;
  height: 150px;
  background-color: tomato;
`

const ResetButton = styled.View`
  padding: 20px;
`

const Reset = styled.Text``
