import React, { Component } from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import SectionHeader from '../Common/SectionHeader'
import Spring from './_Spring'
import Loop from './_Loop'

class AnimatedFunctionsScreen extends Component {
  static propTypes = {}

  render() {
    return (
      <ScrollView>
        <SectionHeader>Spring</SectionHeader>
        <Spring />

        <SectionHeader>Loop</SectionHeader>
        <Loop />
      </ScrollView>
    )
  }
}

export default AnimatedFunctionsScreen

const s = StyleSheet.create({})
