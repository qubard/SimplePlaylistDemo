import { actionCreator } from './typed-redux'
import { Song, Playlist } from './types'

// actionCreator simply wraps { type, payload } for dispatching
export const setSongs = actionCreator<Array<Song>>('setSongs')
export const setPlaylists = actionCreator<Array<Playlist>>('setPlaylists')