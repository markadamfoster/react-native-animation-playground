import React, { Component } from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../Constants'

class ResetButton extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    disabled: PropTypes.bool
  }

  render() {
    const { disabled, onPress } = this.props
    return (
      <Wrapper>
        <TouchableWithoutFeedback onPress={this.props.onPress}>
          <Reset disabled={disabled}>Reset</Reset>
        </TouchableWithoutFeedback>
      </Wrapper>
    )
  }
}

export default ResetButton

const Wrapper = styled.View`
  padding: 20px;
`

const Reset = styled.Text`
  color: ${props => (props.disabled ? '#ccc' : colors.action)};
`
