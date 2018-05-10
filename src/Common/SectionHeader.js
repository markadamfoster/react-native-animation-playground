import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colors } from '../Constants'

class SectionHeader extends Component {
  static propTypes = {}

  render() {
    return (
      <Wrapper>
        <Title>{this.props.children}</Title>
      </Wrapper>
    )
  }
}

export default SectionHeader

const Wrapper = styled.View`
  background-color: ${colors.accent};
  padding: 10px;
`

const Title = styled.Text`
  color: ${colors.light};
  font-size: 18px;
  font-weight: 700;
`
