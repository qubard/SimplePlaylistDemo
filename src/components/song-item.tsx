import React from 'react'
import {
  Text,
  View,
  TouchableWithoutFeedback
} from 'react-native'
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux'
import { setSongs } from '../redux/actions'

class SongItem extends React.Component {
  state = { favorite: false }

  constructor(props: Readonly<{}>) {
    super(props)
    this.onFavorite = this.onFavorite.bind(this)
  }

  onFavorite() {
    this.props.setSongs({ ...this.props.song, favorite: !this.props.song.favorite })
  }

  render() {
    return (
          <View style={{paddingHorizontal: 15, 
              paddingVertical: 5,
              display: 'flex', 
              flexDirection: 'row', 
              alignItems: 'center'
          }}>
          { this.props.showFavorite && (<TouchableWithoutFeedback
            onPressOut={this.onFavorite}
            delayPressIn={0}
          >
            <View style={{ marginRight: 10 }}>
                <Icon size={30} name={this.props.song.favorite ? 'favorite' : 'favorite-border'} type='material' color={'#' + this.props.color}/>
            </View>
          </TouchableWithoutFeedback>) }
                <View style={{ display: 'flex', flexGrow: 1, fontSize: '18', flexDirection: 'column', marginRight: -40 }}>
                    <Text style={{color: '#404040', fontWeight: '700', fontSize: 18}} ellipsizeMode={'tail'} numberOfLines={1}>{ this.props.song.title }</Text>
                    <Text style={{color: '#777777', fontSize: 12}}>{ this.props.song.artist } • { this.props.song.year }</Text>
                </View>
            { this.props.selected &&
            (<View style={{ marginLeft: 10 }}>
                <Icon size={30} name='check' type='material' color={'#' + this.props.color}/>
            </View>) }
          </View>
    )
  }
}

export default connect(
    undefined, 
    dispatch => ({
        setSongs: (song: Song) => dispatch(setSongs(song))
    })
)(SongItem)