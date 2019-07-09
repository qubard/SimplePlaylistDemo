import { Animated, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import {
  Image,
  Text,
  View
} from 'react-native'
import { Icon } from 'react-native-elements'

class PlaylistItem extends React.Component {
  state = {
    touchAnim: new Animated.Value(0)
  }

  constructor(props: Readonly<{}>) {
    super(props)

    this.onPressIn = this.onPressIn.bind(this)
    this.onPressOut = this.onPressOut.bind(this)
    this.onPress = this.onPress.bind(this)
  }

  onPressIn() {
    Animated.timing(this.state.touchAnim, {
      toValue: 1,
      duration: 1,
      useNativeDriver: true
    }).start()
  }

  onPress() {
    setTimeout(() => this.props.navigation.navigate('Songs', { playlistId: this.props.playlist.id }), 30)
  }

  onPressOut() {
    Animated.timing(this.state.touchAnim, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true
    }).start()
  }

  render() {
    return (
      <TouchableWithoutFeedback
         onPressIn={this.onPressIn}
         onPressOut={this.onPressOut}
         onPress={this.onPress}
         delayPressIn={0}
       >
        <View style={{ backgroundColor: '#FFFFFF' }}>
        <Animated.View style={{
          transform: [{
            scale: this.state.touchAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0.98]
            })
          }],
          opacity: this.state.touchAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0.6]
          })
        }}>
          <View style={{ paddingHorizontal: 10, paddingVertical: 5, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <View style={{width: 67, marginRight: 10, borderBottomWidth: 3, borderBottomColor: '#' + this.props.playlist.color}}>
              <Image style={{width: 67, height: 67}} source={{uri: this.props.playlist.coverUri}}/>
            </View>
              <View style={{display: 'flex', flexGrow: 1, fontSize: '18', flexDirection: 'column', marginRight: -40}}>
                <Text style={{color: '#404040', fontWeight: '700', fontSize: 18}} ellipsizeMode={'tail'} numberOfLines={1}>{ this.props.playlist.title }</Text>
                <Text style={{color: '#777777', fontSize: 12}}>by { this.props.playlist.author } • { this.props.playlist.songs && this.props.playlist.songs.length + ' song' + (this.props.playlist.songs.length != 1 ? 's' : '' )}</Text>
              </View>
              <View style={{paddingHorizontal: 5}}>
                <Icon name='playlist-add' type='material' color='#00aced'/>
            </View>
          </View>
      </Animated.View>
      </View>
      </TouchableWithoutFeedback>
    )
  }
}

export default PlaylistItem