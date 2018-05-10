import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Animated
} from 'react-native'

export default class TranslatePosition extends Component {
  state = {
    animatedVal: new Animated.Value(0)
  }

  startAnimation = () => {
    Animated.timing(this.state.animatedVal, {
      toValue: 40,
      duration: 1500
    }).start()
  }

  render() {
    const animatedStyles = {
      top: this.state.animatedVal,
      left: this.state.animatedVal,
      right: this.state.animatedVal
    }

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyles]} />
        </TouchableWithoutFeedback>
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
  box: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    // width: 150,
    height: 150,
    backgroundColor: 'tomato'
  }
})
