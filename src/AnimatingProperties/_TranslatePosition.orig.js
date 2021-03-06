import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Animated
} from 'react-native'

export default class TranslatePosition extends React.Component {
  state = {
    animation: new Animated.Value(0)
  }

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: -300,
      duration: 1500
    }).start(() => {
      this.state.animation.setValue(0)
    })
  }

  render() {
    const animatedStyles = {
      transform: [
        {
          translateX: this.state.animation
        }
      ]
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
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'tomato'
  }
})
