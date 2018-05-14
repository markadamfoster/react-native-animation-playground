import React, { Component } from 'react'
import { Animated, ScrollView } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components'

class Event extends Component {
  static propTypes = {}

  state = {
    animation: new Animated.Value(0)
  }

  startAnimation = () => {}

  render() {
    const backgroundInterpolate = this.state.animation.interpolate({
      inputRange: [0, 3000],
      outputRange: ['rgb(255,99,71)', 'rgb(99,71,255)']
    })

    const backgroundStyle = {
      backgroundColor: backgroundInterpolate
    }
    return (
      <Wrapper>
        <ScrollView
          // call onScroll method every 16ms (60 frames/sec)
          scrollEventThrottle={16}
          // this makes absolutely no sense to me.
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  y: this.state.animation
                }
              }
            }
          ])}
        >
          <Content style={backgroundStyle} />
        </ScrollView>
      </Wrapper>
    )
  }
}

export default Event

const Wrapper = styled.View`
  flex: 1;
`

const Content = styled(Animated.View)`
  height: 3000;
`
