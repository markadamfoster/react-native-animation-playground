import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Animated
} from 'react-native'
import styled from 'styled-components'

import { Button } from 'react-native-elements'

export default class App extends Component {
  static navigationOptions = {
    title: 'Animations!'
  }

  render() {
    const { navigation } = this.props

    return (
      <View style={s.wrapper}>
        {/* Combining Animations */}
        <ButtonWrapper>
          <Button
            raised
            icon={{ name: 'multiline-chart' }}
            title="Combining Animations"
            onPress={() => navigation.navigate('CombiningAnimations')}
          />
        </ButtonWrapper>

        {/* Animated Functions */}
        <ButtonWrapper>
          <Button
            raised
            icon={{ name: 'code' }}
            title="Animated Functions"
            onPress={() => navigation.navigate('AnimatedFunctions')}
          />
        </ButtonWrapper>

        {/* Animating Properties */}
        <ButtonWrapper>
          <Button
            raised
            icon={{ name: 'aspect-ratio' }}
            title="Animating Properties"
            onPress={() => navigation.navigate('AnimatingProperties')}
          />
        </ButtonWrapper>
      </View>
    )
  }
}

const s = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 30
  },
  sectionTitleWrapper: {},
  sectionTitleText: {}
})

const ButtonWrapper = styled.View`
  margin-bottom: 30px;
`
