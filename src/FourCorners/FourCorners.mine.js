import React, { Component } from 'react'
import { Animated, Dimensions, TouchableWithoutFeedback } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const { height, width } = Dimensions.get('window')

class FourCorners extends Component {
  static propTypes = {}

  state = {
    position: 1,
    animatedY: new Animated.Value(0),
    animatedX: new Animated.Value(0)
  }

  startAnimation = () => {
    const { position, animatedY, animatedX } = this.state
    if (position === 1) {
      Animated.spring(animatedY, {
        toValue: 1,
        duration: 250
      }).start()
    } else if (position === 2) {
      Animated.spring(animatedX, {
        toValue: 1,
        duration: 250
      }).start()
    } else if (position === 3) {
      Animated.spring(animatedY, {
        toValue: 0,
        duration: 250
      }).start()
    } else if (position === 4) {
      Animated.spring(animatedX, {
        toValue: 0,
        duration: 250
      }).start()
    }

    // update this.state.position

    if (position === 4) {
      this.setState({ position: 1 })
    } else {
      this.setState({ position: position + 1 })
    }
  }

  render() {
    const viewHeight = height - 150 - 64
    const viewWidth = width - 150
    const interpolatedY = this.state.animatedY.interpolate({
      inputRange: [0, 1],
      outputRange: [0, viewHeight]
    })

    const interpolatedX = this.state.animatedX.interpolate({
      inputRange: [0, 1],
      outputRange: [0, viewWidth]
    })

    const animatedStyles = {
      transform: [{ translateY: interpolatedY }, { translateX: interpolatedX }]
    }
    return (
      <Wrapper>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Box style={animatedStyles} />
        </TouchableWithoutFeedback>
      </Wrapper>
    )
  }
}

export default FourCorners

const Wrapper = styled.View`
  flex: 1;
`

const Box = styled(Animated.View)`
  height: 150px;
  width: 150px;
  background-color: tomato;
`
