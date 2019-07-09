import { createStore } from 'redux'
import { rootReducer, reduxState } from './src/redux/reducers'
import React from 'react'
import { Provider } from 'react-redux'

import Playlists from './src/components/playlists'
import AddSongs from './src/components/add-songs'
import Songs from './src/components/songs'

import {
  createAppContainer,
  createStackNavigator
} from 'react-navigation'

import {
  StatusBar
} from 'react-native'

const store = createStore(
  rootReducer,
  reduxState
)

const AppNavigator = createAppContainer(
  createStackNavigator(
    {
      Index: {
        screen: Playlists,
      },
      Songs: {
        screen: Songs
      },
      AddSongs: {
        screen: AddSongs
      }
    },
    {
      headerMode: 'none',
      initialRouteName: 'Index'
    }
  )
)

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="rgba(0, 0, 0, 0.72)" barStyle="light-content" />
      <AppNavigator />
    </Provider>
  )
}

export default App
