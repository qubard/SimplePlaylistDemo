export interface Song {
    id: Number,
    title: String,
    artist: String,
    year: Number,
    favorite: Boolean
}

export interface Playlist {
    id: Number,
    title: String,
    author: String,
    coverUri: String,
    color: String,
    songs: Array<Number> // References to song ids for normalization
}