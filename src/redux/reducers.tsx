import { combineReducers } from 'redux'
import { setSongs, setPlaylists } from './actions'
import { concat } from './typed-redux'
import { Song, Playlist } from './types'

export interface State {
    readonly songs: Array<Song>,
    readonly playlists: Array<Playlist>
}

export const rootReducer = combineReducers({
    songs: concat<Array<Song>>(setSongs, [], 'id'),
    playlists: concat<Array<Playlist>>(setPlaylists, [], 'id')
})

const allSongs = [
    { id: 0, title: 'Clarity in Kerosene', artist: 'nothing,nowhere', year: 2017, favorite: false },
    { id: 1, title: 'Hopes Up', artist: 'nothing,nowhere', year: 2017, favorite: false },
    { id: 2, title: 'Skully', artist: 'nothing,nowhere', year: 2017, favorite: true },
    { id: 3, title: 'Funeral Fantasy', artist: 'nothing,nowhere', year: 2017, favorite: false },
    { id: 4, title: 'REM', artist: 'nothing,nowhere', year: 2017, favorite: false },
    { id: 5, title: 'Black Heart', artist: 'nothing,nowhere', year: 2017, favorite: false },
    { id: 6, title: 'Marykate', artist: 'nothing,nowhere', year: 2017, favorite: false },
    { id: 7, title: 'Houdini', artist: 'nothing,nowhere', year: 2017, favorite: false },
    { id: 8, title: 'Hotline Bling', artist: 'Drake', year: 2016, favorite: false },
    { id: 9, title: 'Somebody Else', artist: 'The 1975', year: 2016, favorite: false },
    { id: 10, title: 'BTS (방탄소년단) \'DNA\'', artist: 'BTS', year: 2018, favorite: false },
    { id: 11, title: 'Loner', artist: 'YUNGBLUD', year: 2019, favorite: false },
    { id: 12, title: 'BLOODY STREAM', artist: 'Coda', year: 2013, favorite: false },
]

export const reduxState:State = {
    songs: allSongs,
    playlists: [
        {
            id: 0,
            title: 'jojo\'s bizarre adventure op',
            author: 'jotaro06',
            coverUri: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP0700-CUSA04897_00-JOJOSEOHCOMPLETE/1557246893000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000',
            color: 'D183BC',
            songs: [12]
        },
        {
            id: 1,
            title: 'Drake Playlist',
            author: 'DrakeFan400',
            coverUri: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Scorpion_by_Drake.jpg/220px-Scorpion_by_Drake.jpg',
            color: '007A0C',
            songs: []
        },
        {
            id: 2,
            title: 'Loner',
            author: 'YUNGBLUD',
            coverUri: 'https://i.ebayimg.com/images/g/OvQAAOSwx~lca7Zw/s-l300.jpg',
            color: '0477FF',
            songs: [11]
        },
        {
            id: 3,
            title: 'Love Yourself 結 \'Answer\'',
            author: 'RM',
            coverUri: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/BTS%2C_Love_Yourself_Answer%2C_album_cover.jpg/220px-BTS%2C_Love_Yourself_Answer%2C_album_cover.jpg',
            color: '8E343D',
            songs: []
        },
        {
            id: 4,
            title: 'The 1975',
            author: 'Anonymous',
            coverUri: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/The_1975_%28album%29_by_The_1975.png/220px-The_1975_%28album%29_by_The_1975.png',
            color: 'FF63A1',
            songs: []
        },
        {
            id: 5,
            title: 'Empty album',
            author: 'another',
            coverUri: 'https://us.123rf.com/450wm/princeoflove/princeoflove1705/princeoflove170500212/78744125-man-holding-record-isolated-on-green-art-filter-music-background.jpg?ver=6',
            color: '28EFC2',
            songs: []
        },
        {
            id: 6,
            title: 'Pink Floyd',
            author: 'fan500',
            coverUri: 'https://lh5.googleusercontent.com/-444l_KCN5iA/TXFDWWJyuwI/AAAAAAAABNY/PLNJLdqMyg4/s1600/Pink_Floyd_-_Dark_Side_of_the_Moon.jpg',
            color: 'C19EFF',
            songs: []
        },
        {
            id: 7,
            title: 'reaper',
            author: 'nothing,nowhere',
            coverUri: 'data:image/jpeg;base64,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',
            color: '404040',
            songs: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        }
    ]
}