import React, { Component } from 'react'
import { TouchableWithoutFeedback, Animated } from 'react-native'
import styled from 'styled-components'

import ResetButton from '../Common/ResetButton'

class Sequence extends Component {
  state = {
    colorAnimation: new Animated.Value(0),
    scaleAnimation: new Animated.Value(1)
  }

  startAnimation = () => {
    Animated.sequence([
      Animated.timing(this.state.scaleAnimation, {
        toValue: 2,
        duration: 300
      }),
      Animated.timing(this.state.colorAnimation, {
        toValue: 1,
        duration: 300
      })
    ]).start()
  }

  resetAnimation = () => {
    this.state.colorAnimation.setValue(0)
    this.state.scaleAnimation.setValue(1)
  }

  render() {
    const backgroundColorInterpolate = this.state.colorAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgb(255,99,71)', 'rgb(99,71,255)']
    })

    const boxStyle = {
      backgroundColor: backgroundColorInterpolate,
      transform: [{ scale: this.state.scaleAnimation }]
    }

    return (
      <Wrapper>
        <ResetButton onPress={this.resetAnimation} />

        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Box style={boxStyle}>
            <Copy>This is a neat box!</Copy>
          </Box>
        </TouchableWithoutFeedback>
      </Wrapper>
    )
  }
}

export default Sequence

const Wrapper = styled.View`
  padding: 30px;
  justify-content: center;
  align-items: center;
`

const Box = styled(Animated.View)`
  height: 150px;
  width: 150px;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
`

const Copy = styled.Text`
  color: white;
`
