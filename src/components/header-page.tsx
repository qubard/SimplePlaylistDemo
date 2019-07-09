import React from 'react'
import {
  View,
  Text,
  TouchableWithoutFeedback,
  SafeAreaView
} from 'react-native'

export class HeaderPage extends React.Component {
  title(): String {
    return 'Generic Header'
  }

  headerLeftLabel() {
    return <Text></Text>
  }

  content() {
    return <Text></Text>
  }

  headerRightLabel() {
    return <Text></Text>
  }

  headerColor(): String {
    return '00aced'
  }

  header() {
    return (
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center',
      backgroundColor: '#' + this.headerColor(), justifyContent: 'space-between',
      paddingHorizontal: 10, paddingVertical: 12 }}>
          { this.headerLeft() }
          <Text style={{ fontSize: 22, color: '#fff', fontWeight: '700' }}>
            { this.title() }
          </Text>
          { this.headerRight() }
      </View>
    )
  }

  headerRight() {
    return (
      <TouchableWithoutFeedback onPress={() => this.onPressRight()}>
        { this.headerRightLabel() }
      </TouchableWithoutFeedback>
    )
  }

  headerLeft() {
    return (
      <TouchableWithoutFeedback onPress={() => this.onPressLeft()}>
        { this.headerLeftLabel() }
      </TouchableWithoutFeedback>
    )
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        { this.header() }
        { this.content() }
      </SafeAreaView>
    )
  }
}
