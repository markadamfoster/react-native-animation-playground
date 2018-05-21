import React, { Component } from 'react'
import { Animated, Dimensions, TouchableWithoutFeedback } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const { height, width } = Dimensions.get('window')

class FourCorners extends Component {
  static propTypes = {}

  state = {
    animation: new Animated.ValueXY()
  }

  startAnimation = () => {
    const { height, width } = Dimensions.get('window')

    Animated.sequence([
      Animated.spring(this.state.animation.y, {
        toValue: height - this._boxHeight - 64
      }),
      Animated.spring(this.state.animation.x, {
        toValue: width - this._boxWidth
      }),
      Animated.spring(this.state.animation.y, {
        toValue: 0
      }),
      Animated.spring(this.state.animation.x, {
        toValue: 0
      })
    ]).start()
  }

  saveDimensions = e => {
    this._boxWidth = e.nativeEvent.layout.width
    this._boxHeight = e.nativeEvent.layout.height
  }

  render() {
    const animatedStyles = {
      transform: this.state.animation.getTranslateTransform()
    }

    return (
      <Wrapper>
        <TouchableWithoutFeedback
          onPress={this.startAnimation}
          onLayout={this.saveDimensions}
        >
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
  position: absolute;
  top: 0;
  left: 0;
`
