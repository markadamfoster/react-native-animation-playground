import React, { Component } from 'react'
import { TouchableWithoutFeedback, Animated } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ResetButton from '../Common/ResetButton'

class Spring extends Component {
  static propTypes = {}

  state = {
    animatedScale: new Animated.Value(1)
  }

  startAnimation = () => {
    Animated.spring(this.state.animatedScale, {
      toValue: 1.8,
      friction: 2,
      tension: 120
    }).start()
  }

  resetAnimation = () => {
    this.state.animatedScale.setValue(1)
  }

  render() {
    const animatedStyles = {
      transform: [{ scale: this.state.animatedScale }]
    }

    return (
      <Wrapper>
        <ResetButton onPress={this.resetAnimation} />
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Circle style={animatedStyles} />
        </TouchableWithoutFeedback>
      </Wrapper>
    )
  }
}

export default Spring

const Wrapper = styled.View`
  padding: 30px;
  justify-content: center;
  align-items: center;
`

const Circle = styled(Animated.View)`
  margin-top: 50px;
  height: 80px;
  width: 80px;
  border-radius: 80px;
  background-color: tomato;
`
