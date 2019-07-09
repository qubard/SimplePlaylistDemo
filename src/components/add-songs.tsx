import React from 'react'
import { connect } from 'react-redux'
import { HeaderPage } from './header-page'
import {
  ScrollView,
  View,
  TouchableWithoutFeedback
} from 'react-native'
import { Icon } from 'react-native-elements'
import SongItem from './song-item'

import { setPlaylists } from '../redux/actions'
import { Playlist, Song } from '../redux/types'

class AddSongs extends HeaderPage {
  state = { songs: this.props.songs }

  componentDidMount() {
    this.selectCurrentSongs()
  }

  selectCurrentSongs() {
    let songIds = this.props.navigation.getParam('playlist', { songs: [] }).songs
    let newSongs = this.state.songs.filter((song: Song) => songIds.indexOf(song.id) == -1)

    this.setState({ songs: newSongs })
  }

  headerColor(): String {
    let playlist = this.props.navigation.getParam('playlist', {})

    if (!playlist) {
      return super.headerColor()
    }

    return playlist.color
  }

  clearSelectedSongs() {
    // Manipulate local song state, not ideal..could also just store another array of selected songs
    // but this is arguably simpler
    this.setState({ songs: this.state.songs.map(song => {
        song.selected = false
        return song
    })})
  }

  onPressLeft(): void {
    this.props.navigation.goBack()
    this.clearSelectedSongs()
  }

  onPressRight(): void {
    let newPlaylist = this.props.navigation.getParam('playlist', { songs: [] })
    let songs = newPlaylist.songs

    // Modify playlist adding new songs that are selected (aren't in the list & selected)
    let newSongs = this.state.songs.filter(song => songs.indexOf(song) == -1 && song.selected).map(song => song.id)
    newPlaylist.songs = newPlaylist.songs.concat(newSongs)

    this.props.setPlaylists(newPlaylist)

    this.props.navigation.navigate('Songs', { playlist: newPlaylist })
    this.clearSelectedSongs()
  }

  headerLeftLabel() {
    return (<Icon size={28} name='arrow-back' type='material' color='#fff'/>)
  }

  headerRightLabel() {
    return (<Icon size={28} name='done-all' type='material' color='#fff'/>)
  }

  title(): String {
    let selectedCount = 0

    this.state.songs.forEach(song => selectedCount += song.selected ? 1 : 0)

    if (selectedCount > 0) {
        return selectedCount + ' selected'
    }

    return 'Select Songs'
  }

  select(song: Song) {
      let songs = this.state.songs

      let newSongs = songs.map(song_ => {
          if (song_ == song) {
              song_.selected = song_.selected ? !song_.selected : true
          }
          return song_
      })

      this.setState({ songs: newSongs })
  }

  content() {
    const items = this.state.songs.map(song => (
      <TouchableWithoutFeedback key={song.title + song.artist} onPressIn={() => this.select(song)}>
        <View>
            <SongItem showFavorite={false} selected={song.selected} color={this.headerColor()} song={song}/>
        </View>
      </TouchableWithoutFeedback>
    ))

    return (
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ backgroundColor: '#ededed' }}>
        <View style={{backgroundColor: '#fff', paddingVertical: 5 }}>
          { items }
        </View>
      </ScrollView>
    )
  }
}

export default connect(
    state => ({
        songs: state.songs,
    }),
    dispatch => ({
        setPlaylists: (playlist: Playlist) => dispatch(setPlaylists(playlist))
    })
)(AddSongs)