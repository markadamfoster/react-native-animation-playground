import React, { Component } from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import SectionHeader from '../Common/SectionHeader'
import Parallel from './_Parallel'
import Sequence from './_Sequence'
import Stagger from './_Stagger'
import Delay from './_Delay'

class CombiningAnimationsScreen extends Component {
  static propTypes = {}

  render() {
    return (
      <ScrollView>
        <SectionHeader>Parallel</SectionHeader>
        <Parallel />

        <SectionHeader>Sequence</SectionHeader>
        <Sequence />

        <SectionHeader>Stagger</SectionHeader>
        <Stagger />

        <SectionHeader>Delay</SectionHeader>
        <Delay />
      </ScrollView>
    )
  }
}

export default CombiningAnimationsScreen

const s = StyleSheet.create({})
