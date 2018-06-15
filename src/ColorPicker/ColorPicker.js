import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native'

import Icon from 'react-native-vector-icons/Foundation'

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput)
const AnimatedIcon = Animated.createAnimatedComponent(Icon)

export default class animations extends Component {
  state = {
    animation: new Animated.Value(0),
    buttonAnimation: new Animated.Value(0),
    color: '#000',
    inputOpen: false
  }

  handleToggle = () => {
    const toValue = this._open ? 0 : 1
    Animated.spring(this.state.animation, {
      toValue
    }).start()

    this._open = !this._open
  }

  toggleInput = () => {
    const toValue = this._inputOpen ? 0 : 1
    Animated.timing(this.state.buttonAnimation, {
      toValue,
      duration: 350
    }).start()

    this._inputOpen = !this._inputOpen
    this.setState(
      {
        inputOpen: this._inputOpen
      },
      () => {
        !this.state.inputOpen
          ? this._input.getNode().blur()
          : this._input.getNode().focus()
      }
    )
  }

  render() {
    const colorStyle = { backgroundColor: this.state.color }

    const scaleXinterpolate = this.state.animation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 0, 1]
    })

    const translateYinterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [150, 0]
    })

    const rowStyle = {
      opacity: this.state.animation,
      transform: [
        { translateY: translateYinterpolate },
        { scaleX: scaleXinterpolate },
        { scaleY: this.state.animation }
      ]
    }

    const moveInterpolate = this.state.buttonAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [-150, 0]
    })

    const buttonStyle = {
      transform: [
        {
          translateX: moveInterpolate
        },
        {
          scale: this.state.buttonAnimation
        }
      ]
    }

    const inputOpacityInterpolate = this.state.buttonAnimation.interpolate({
      inputRange: [0, 0.8, 1],
      outputRange: [0, 0, 1]
    })

    const inputStyle = {
      opacity: inputOpacityInterpolate
    }

    const iconTranslateInterpolate = this.state.buttonAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -20]
    })

    const iconOpacityInterpolate = this.state.buttonAnimation.interpolate({
      inputRange: [0, 0.2],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    })

    const iconStyle = {
      opacity: iconOpacityInterpolate,
      transform: [
        {
          translateX: iconTranslateInterpolate
        }
      ]
    }

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.rowWrap, rowStyle]}>
          <TouchableWithoutFeedback onPress={this.toggleInput}>
            <Animated.View style={[styles.colorBall, colorStyle]} />
          </TouchableWithoutFeedback>
          <View style={styles.row}>
            <TouchableOpacity>
              <AnimatedIcon
                name="bold"
                size={30}
                color="#555"
                style={iconStyle}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <AnimatedIcon
                name="italic"
                size={30}
                color="#555"
                style={iconStyle}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <AnimatedIcon
                name="align-center"
                size={30}
                color="#555"
                style={iconStyle}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <AnimatedIcon
                name="link"
                size={30}
                color="#555"
                style={iconStyle}
              />
            </TouchableOpacity>

            <Animated.View
              style={[StyleSheet.absoluteFill, styles.colorRowWrap]}
              pointerEvents={this.state.inputOpen ? 'auto' : 'none'}
            >
              <AnimatedTextInput
                style={[styles.input, inputStyle]}
                value={this.state.color}
                onChangeText={color => this.setState({ color })}
                ref={input => (this._input = input)}
              />
              <TouchableWithoutFeedback onPress={this.toggleInput}>
                <Animated.View style={[styles.okayButton, buttonStyle]}>
                  <Text style={styles.okayText}>OK</Text>
                </Animated.View>
              </TouchableWithoutFeedback>
            </Animated.View>
          </View>
        </Animated.View>
        <TouchableOpacity onPress={this.handleToggle} style={styles.button}>
          <Text>Toggle Open/Closed</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  rowWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: '50%',
    backgroundColor: '#FFF',
    borderRadius: 20,
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowOffset: { x: 2, y: 2 },
    shadowRadius: 3,
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  row: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    overflow: 'hidden'
  },

  colorRowWrap: {
    flexDirection: 'row',
    flex: 1,
    paddingLeft: 5
  },
  input: {
    flex: 1
  },
  okayButton: {
    borderRadius: 20,
    height: '100%',
    width: 40,
    backgroundColor: '#309EEB',
    alignItems: 'center',
    justifyContent: 'center'
  },
  okayText: {
    color: '#FFF'
  },
  colorBall: {
    width: 15,
    height: 15,
    borderRadius: 8
  },
  button: {
    marginTop: 50
  }
})

AppRegistry.registerComponent('animations', () => animations)

console.disableYellowBox = true
