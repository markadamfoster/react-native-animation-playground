import React, { Component } from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import SectionHeader from '../Common/SectionHeader'
import InterpolatingInterpolates from './_InterpolatingInterpolates'
import Colors from './_Colors'
import Rotation from './_Rotation'

class InterpolationScreen extends Component {
  static propTypes = {}

  render() {
    return (
      <ScrollView>
        <SectionHeader>Interpolating Interpolates</SectionHeader>
        <InterpolatingInterpolates />

        <SectionHeader>Interpolating Colors</SectionHeader>
        <Colors />

        <SectionHeader>Interpolating Rotation</SectionHeader>
        <Rotation />
      </ScrollView>
    )
  }
}

export default InterpolationScreen

const s = StyleSheet.create({})
