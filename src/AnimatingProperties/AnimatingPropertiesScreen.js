import React, { Component } from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import SectionHeader from '../Common/SectionHeader'

import Opacity from './_Opacity'
import TranslatePosition from './_TranslatePosition'
import Scale from './_Scale'
import WidthHeight from './_WidthHeight'
import AbsolutePosition from './_AbsolutePosition'
import Color from './_Color'
import Rotation from './_Rotation'
import WidthHeightPercentage from './_WidthHeightPercentage'

class AnimatingPropertiesScreen extends Component {
  static propTypes = {}

  render() {
    return (
      <ScrollView>
        <SectionHeader>Opacity</SectionHeader>
        <Opacity />

        <SectionHeader>Translate Position</SectionHeader>
        <TranslatePosition />

        <SectionHeader>Scale</SectionHeader>
        <Scale />

        <SectionHeader>Height / Width % (w/ easing)</SectionHeader>
        <WidthHeightPercentage />
      </ScrollView>
    )
  }
}

export default AnimatingPropertiesScreen

const s = StyleSheet.create({})
