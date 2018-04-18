import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Animated
} from 'react-native'

export default class App extends Component {
  static navigationOptions = {
    title: 'Animations!'
  }

  render() {
    const { navigation } = this.props

    return (
      <View style={s.wrapper}>
        <TouchableWithoutFeedback
          style={s.sectionTitleWrapper}
          onPress={() => navigation.navigate('AnimatingProperties')}
        >
          <View>
            <Text style={s.sectionTitleText}>Animating Properties</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const s = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  sectionTitleWrapper: {},
  sectionTitleText: {}
})
