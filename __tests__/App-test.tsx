/**
 * @format
 */

import 'react-native'
import React from 'react'

import AddSongs from '../src/components/add-songs'
import { HeaderPage } from '../src/components/header-page'
import Playlists from '../src/components/playlists'
import Songs from '../src/components/songs'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

import { Provider } from 'react-redux'

import { createStore } from 'redux'
import { rootReducer, reduxState } from '../src/redux/reducers'

const store = createStore(
  rootReducer,
  reduxState
)

it('renders playlists correctly', () => {
  const navigation = { navigate: jest.fn(), getParam: (param, def) => def };
  const component = renderer.create(<Provider store={store} navigation={navigation}><Playlists /></Provider>)

  expect(component).toMatchSnapshot()
})


it('renders headerpage correctly', () => {
  const component = renderer.create(<HeaderPage/>)

  expect(component).toMatchSnapshot()
})

it('renders songs correctly', () => {
  const component = renderer.create(<Provider store={store}><Songs playlist={reduxState.playlists[0]} /></Provider>)

  expect(component).toMatchSnapshot()
})

it('renders add songs correctly', () => {
  const navigation = { navigate: jest.fn(), getParam: (param, def) => def };
  const component = renderer.create(<Provider store={store}><AddSongs navigation={navigation}/></Provider>)

  expect(component).toMatchSnapshot()
})