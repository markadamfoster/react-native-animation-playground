import React, { Component } from 'react'
import { TouchableWithoutFeedback, Animated } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ResetButton from '../Common/ResetButton'

class Loop extends Component {
  static propTypes = {}

  state = {
    animation: new Animated.Value(0)
  }

  startAnimation = () => {
    Animated.loop(
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 1000
      })
    ).start()
  }

  resetAnimation = () => {
    this.state.animation.setValue(1)
  }

  render() {
    const interpolatedVal = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg']
    })
    const animatedStyles = {
      transform: [{ rotate: interpolatedVal }]
    }

    return (
      <Wrapper>
        <ResetButton onPress={this.resetAnimation} />
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Box style={animatedStyles} />
        </TouchableWithoutFeedback>
      </Wrapper>
    )
  }
}

export default Loop

const Wrapper = styled.View`
  padding: 30px;
  justify-content: center;
  align-items: center;
`

const Box = styled(Animated.View)`
  margin-top: 50px;
  height: 150px;
  width: 150px;
  background-color: tomato;
`
