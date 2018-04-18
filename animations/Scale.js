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
    animatedScaleVal: new Animated.Value(1)
  }

  startAnimation = () => {
    Animated.timing(this.state.animatedScaleVal, {
      toValue: -2,
      duration: 1500
    }).start(() => {
      this.state.animatedScaleVal.setValue(1)
    })
  }

  render() {
    const animatedStyles = {
      transform: [
        {
          scaleX: this.state.animatedScaleVal
        }
      ]
    }
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyles]}>
            <Text>This side forward</Text>
          </Animated.View>
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
    width: 150,
    height: 150,
    backgroundColor: 'tomato'
  }
})
