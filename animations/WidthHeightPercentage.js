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
    animatedVal: new Animated.Value(0)
  }

  startAnimation = () => {
    Animated.timing(this.state.animatedVal, {
      toValue: 1,
      duration: 250
    }).start()
  }

  render() {
    const widthInterpolate = this.state.animatedVal.interpolate({
      inputRange: [0, 1],
      outputRange: ['20%', '80%']
    })

    const heightInterpolate = this.state.animatedVal.interpolate({
      inputRange: [0, 1],
      outputRange: ['20%', '50%']
    })

    const animatedStyle = {
      width: widthInterpolate,
      height: heightInterpolate
    }

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyle]} />
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
    backgroundColor: 'tomato'
  }
})
