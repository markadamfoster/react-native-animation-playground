import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
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
        {/* Expanding Notify Input */}
        {/* <ButtonWrapper>
          <Button
            raised
            icon={{ name: 'border-style' }}
            title="Expanding Notify Input"
            onPress={() => navigation.navigate('ExpandingNotifyInput')}
          />
        </ButtonWrapper> */}

        {/* Exploding Heart Button */}
        {/* <ButtonWrapper>
          <Button
            raised
            icon={{ name: 'border-style' }}
            title="Exploding Heart Button"
            onPress={() => navigation.navigate('ExplodingHeartButton')}
          />
        </ButtonWrapper> */}

        {/* Bounce Heart Button */}
        {/* <ButtonWrapper>
          <Button
            raised
            icon={{ name: 'border-style' }}
            title="Bounce Heart Button"
            onPress={() => navigation.navigate('BounceHeartButton')}
          />
        </ButtonWrapper> */}

        {/* Floating Hearts */}
        <ButtonWrapper>
          <Button
            raised
            icon={{ name: 'border-style' }}
            title="Floating Hearts"
            onPress={() => navigation.navigate('FloatingHearts')}
          />
        </ButtonWrapper>

        {/* Horizontal Parallax */}
        <ButtonWrapper>
          <Button
            raised
            icon={{ name: 'border-style' }}
            title="Horizontal Parallax"
            onPress={() => navigation.navigate('HorizontalParallax')}
          />
        </ButtonWrapper>

        {/* Modal w/ Swipe Away */}
        <ButtonWrapper>
          <Button
            raised
            icon={{ name: 'border-style' }}
            title="Modal w/ Swipe Away"
            onPress={() => navigation.navigate('ModalSwipeAway')}
          />
        </ButtonWrapper>

        {/* Write Button */}
        <ButtonWrapper>
          <Button
            raised
            icon={{ name: 'border-style' }}
            title="Write Button"
            onPress={() => navigation.navigate('WriteButton')}
          />
        </ButtonWrapper>

        {/* App Intro */}
        <ButtonWrapper>
          <Button
            raised
            icon={{ name: 'border-style' }}
            title="App Intro"
            onPress={() => navigation.navigate('AppIntro')}
          />
        </ButtonWrapper>

        {/* Floating Action Menu */}
        <ButtonWrapper>
          <Button
            raised
            icon={{ name: 'border-style' }}
            title="Floating Action Menu"
            onPress={() => navigation.navigate('FloatingActionMenu')}
          />
        </ButtonWrapper>

        {/* Color Picker */}
        <ButtonWrapper>
          <Button
            raised
            icon={{ name: 'border-style' }}
            title="Color Picker"
            onPress={() => navigation.navigate('ColorPicker')}
          />
        </ButtonWrapper>

        {/* Photo Grid */}
        <ButtonWrapper>
          <Button
            raised
            icon={{ name: 'border-style' }}
            title="Photo Grid"
            onPress={() => navigation.navigate('PhotoGrid')}
          />
        </ButtonWrapper>

        {/* Questionnaire */}
        <ButtonWrapper>
          <Button
            raised
            icon={{ name: 'border-style' }}
            title="Questionnaire"
            onPress={() => navigation.navigate('Questionnaire')}
          />
        </ButtonWrapper>

        {/* Notifications */}
        <ButtonWrapper>
          <Button
            raised
            icon={{ name: 'border-style' }}
            title="Notifications"
            onPress={() => navigation.navigate('Notifications')}
          />
        </ButtonWrapper>

        {/* Progress Bar */}
        <ButtonWrapper>
          <Button
            raised
            icon={{ name: 'border-style' }}
            title="Progress Bar"
            onPress={() => navigation.navigate('ProgressBar')}
          />
        </ButtonWrapper>

        {/* Staggered Form Elements */}
        <ButtonWrapper>
          <Button
            raised
            icon={{ name: 'border-style' }}
            title="Staggered Form Elements"
            onPress={() => navigation.navigate('FormElements')}
          />
        </ButtonWrapper>

        {/* Staggered Heads */}
        <ButtonWrapper>
          <Button
            raised
            icon={{ name: 'border-style' }}
            title="Staggered Heads"
            onPress={() => navigation.navigate('StaggeredHeads')}
          />
        </ButtonWrapper>

        {/* Four Corners */}
        <ButtonWrapper>
          <Button
            raised
            icon={{ name: 'border-style' }}
            title="Four Corners"
            onPress={() => navigation.navigate('FourCorners')}
          />
        </ButtonWrapper>

        {/* Interpolation */}
        <ButtonWrapper>
          <Button
            raised
            icon={{ name: 'border-style' }}
            title="Interpolation"
            onPress={() => navigation.navigate('Interpolation')}
          />
        </ButtonWrapper>

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
