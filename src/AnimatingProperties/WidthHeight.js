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
    animatedVal: new Animated.Value(150)
  }

  startAnimation = () => {
    Animated.timing(this.state.animatedVal, {
      toValue: 300,
      duration: 1500
    }).start()
  }

  render() {
    const animatedStyles = {
      width: this.state.animatedVal,
      height: this.state.animatedVal
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
    backgroundColor: 'tomato'
  }
})
