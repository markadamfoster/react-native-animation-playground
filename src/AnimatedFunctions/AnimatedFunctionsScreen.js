import React, { Component } from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Button } from 'react-native-elements'

import SectionHeader from '../Common/SectionHeader'
import Spring from './_Spring'
import Loop from './_Loop'

class AnimatedFunctionsScreen extends Component {
  static propTypes = {}

  render() {
    const { navigation } = this.props

    return (
      <ScrollView>
        <SectionHeader>Spring</SectionHeader>
        <Spring />

        <SectionHeader>Loop</SectionHeader>
        <Loop />

        <SectionHeader>Event</SectionHeader>
        <ButtonWrapper>
          <Button
            raised
            title="Event (Onscroll)"
            onPress={() => navigation.navigate('AnimFuncEvent')}
          />
        </ButtonWrapper>

        <SectionHeader>Decay</SectionHeader>
        <ButtonWrapper>
          <Button
            raised
            title="Decay"
            onPress={() => navigation.navigate('AnimFuncDecay')}
          />
        </ButtonWrapper>
      </ScrollView>
    )
  }
}

export default AnimatedFunctionsScreen

const s = StyleSheet.create({})

const ButtonWrapper = styled.View`
  margin: 30px;
`
