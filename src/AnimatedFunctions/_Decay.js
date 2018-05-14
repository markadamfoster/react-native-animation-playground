import React, { Component } from 'react'
import { Animated, ScrollView, PanResponder } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components'

/*
    Animated Decay lets you apply a velocity & decelleration to an animated value
    (for a throw, flick or other gesture that continues after user releases)
*/

class Decay extends Component {
  state = {
    animation: new Animated.ValueXY(0)
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        this.state.animation.extractOffset()
      },
      onPanResponderMove: Animated.event([
        null,
        {
          dx: this.state.animation.x,
          dy: this.state.animation.y
        }
      ]),
      onPanResponderRelease: (e, { vx, vy }) => {
        Animated.decay(this.state.animation, {
          velocity: { x: vx, y: vy },
          deceleration: 0.997
        }).start()
      }
    })
  }

  render() {
    const animatedStyle = {
      transform: this.state.animation.getTranslateTransform()
    }

    return (
      <Wrapper>
        <Box style={animatedStyle} {...this._panResponder.panHandlers} />
      </Wrapper>
    )
  }
}

export default Decay

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const Box = styled(Animated.View)`
  height: 80px;
  width: 80px;
  background-color: tomato;
`
