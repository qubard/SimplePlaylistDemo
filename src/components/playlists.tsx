import React from 'react'
import { connect } from 'react-redux'
import PlaylistItem from './playlist-item'
import { HeaderPage } from './header-page'

import {
  SafeAreaView,
  ScrollView,
  View
} from 'react-native'

class Playlists extends HeaderPage {
  title(): String {
    return 'Playlists'
  }
  
  content() {
    const items = this.props.playlists.map(playlist => (
      <PlaylistItem key={playlist.title} navigation={this.props.navigation} playlist={playlist}/>
    ))

    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{ backgroundColor: '#ededed' }}>
          <View style={{backgroundColor: '#fff', paddingVertical: 5 }}>
            { items }
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default connect(state => ({
  playlists: state.playlists,
}))(Playlists)