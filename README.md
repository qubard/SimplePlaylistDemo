# SimplePlaylistDemo

![](/screenshots/playlists.png)
![](/screenshots/addsongs.png)
![](/screenshots/songs.png)

# About

This is my Evernote Take-Home project. Developed and tested with android. The released APK can be found in `android/app/build/outputs/apk/release/app-release.apk`

# How it works

State is managed with Redux and we use a normalized version of playlists and songs then write actions/connectors to send data from the state store and retrieve it. The `concat` reducer is helpful for adding a generic element to an array.

For navigation, we use `react-navigation` and use our own custom header. For icons, we use `react-native-icons`.

# Setup

Running `npm install` will install of the required packages found in `package.json`.

```
npm install
```

You might need to run `jetifier` to migrate packages to AndroidX for `react-native-gesture=handler` on Android/iOS, so run `npx jetify` after installation.

# Release

To launch the release build for Android, run `react-native run-android --variant=release` with your Android phone plugged in with **USB debugging** enabled.

# Debugging

To launch, run `npm start` or `yarn start`, plug in your Android device and then run `react-native run-android`

# Tests

To launch a basic rendering test suite run `npm test` or `yarn test`.

# Future things to improve

- Polished animations
- Make the buttons have a larger boundary box for pressing
- More tests (especially for Redux)
- Utility functions like ellipsis for word wrapping
- Separate styling into stylesheets (duh)