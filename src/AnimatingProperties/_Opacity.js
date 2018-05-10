import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Animated
} from 'react-native'
import styled from 'styled-components'

export default class Opacity extends Component {
  state = {
    opacityVal: new Animated.Value(1)
  }

  startAnimation = () => {
    Animated.timing(this.state.opacityVal, {
      toValue: 0,
      duration: 300
    }).start(() => {
      Animated.timing(this.state.opacityVal, {
        toValue: 1,
        duration: 500
      }).start()
    })
  }

  render() {
    const animatedStyles = {
      opacity: this.state.opacityVal
    }

    return (
      <Container>
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

const styles = StyleSheet.create({
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'tomato'
  }
})
