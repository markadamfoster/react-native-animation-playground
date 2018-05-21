import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  PanResponder
} from 'react-native'

import Vjeux from './vjeux.jpg'

export default class animations extends Component {
  state = {
    heads: [
      {
        image: Vjeux,
        animation: new Animated.ValueXY(),
        text: 'Drag Me'
      },
      {
        image: Vjeux,
        animation: new Animated.ValueXY()
      },
      {
        image: Vjeux,
        animation: new Animated.ValueXY()
      },
      {
        image: Vjeux,
        animation: new Animated.ValueXY()
      }
    ]
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderGrant: (e, gestureState) => {
        this.state.heads.map(({ animation }) => {
          animation.extractOffset()
          animation.setValue({ x: 0, y: 0 }) // this is just to combat a bug that currently exists in Animated
        })
      },
      onPanResponderMove: (e, { dx, dy }) => {
        this.state.heads[0].animation.setValue({
          x: dx,
          y: dy
        })

        const animations = this.state.heads
          .slice(1)
          .map(({ animation }, index) => {
            Animated.sequence([
              Animated.delay(index * 10),
              Animated.spring(animation, {
                toValue: { x: dx, y: dy }
              })
            ]).start()
          })
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.heads
          .slice(0)
          .reverse() // this is so the first head shows on top (aka, needs to be last with the way RN renders things)
          .map((item, index, items) => {
            const pan =
              index === items.length - 1 ? this._panResponder.panHandlers : {} // only attach panhandlers to last (top) item

            return (
              <Animated.Image
                {...pan}
                key={index}
                source={item.image}
                style={[
                  styles.head,
                  { transform: item.animation.getTranslateTransform() }
                ]}
              />
            )
          })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  head: {
    width: 80,
    height: 80,
    borderRadius: 40,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
