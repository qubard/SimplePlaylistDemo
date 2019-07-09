import { HeaderPage } from './header-page'
import React from 'react'
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux'
import {
  ScrollView,
  View,
  Text
} from 'react-native'
import SongItem from './song-item'
import { Song, Playlist } from '../redux/types'

class Songs extends HeaderPage {
  onPressLeft(): void {
    this.props.navigation.goBack()
  }

  onPressRight(): void {
    this.props.navigation.navigate('AddSongs', { playlist: this.props.playlist })
  }

  headerRightLabel() {
    return (<Icon size={28} name='add' type='material' color='#fff'/>)
  }

  headerLeftLabel() {
    return (<Icon size={28} name='arrow-back' type='material' color='#fff'/>)
  }

  headerColor() {
    return this.props.playlist.color
  }

  content() {
    let songs = this.props.playlist.songs.map((id: Number) => this.props.songs.find((song: Song) => song.id == id))

    if (!songs || !songs.length) {
      return (
        <View style={{backgroundColor: '#fff', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 20, color: '#666'}}>Try adding some songs!</Text>
        </View>
      )
    }

    const items = songs.map(song => (
      <SongItem showFavorite={true} key={song.id} color={this.headerColor()} selectable={false} song={song}/>
    ))

    return (
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ backgroundColor: '#ededed' }}>
        <View style={{backgroundColor: '#fff', paddingVertical: 5 }}>
          { items }
        </View>
      </ScrollView>
    )
  }

  title(): String {
    let title = this.props.playlist.title

    if (title.length > 14) {
      title = title.substring(0, 14).trim() + '...'
    }

    return title
  }
}

export default connect((state, ownProps) => ({
  songs: state.songs,
  playlist: state.playlists.find((playlist: Playlist) => {
    let playlistId = ownProps.playlist ? ownProps.playlist.id : ownProps.navigation && ownProps.navigation.getParam('playlistId', undefined)
    return playlistId == playlist.id
  }),
}))(Songs)