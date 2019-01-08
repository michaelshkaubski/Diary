import React, { Component } from 'react'
import { View } from 'react-native'
import * as firebase from 'firebase'
import { Ionicons } from '@expo/vector-icons'
import BottomNavigation, { IconTab } from 'react-native-material-bottom-navigation'
export default class App extends React.Component {
  tabs = [
    {
      key: 'feed',
      icon: 'md-bookmarks',
      barColor: '#fc002e',
      pressColor: 'rgba(0, 0, 0, 0.25)'
    },
    {
      key: 'search',
      icon: 'md-search',
      barColor: '#00db79',
      pressColor: 'rgba(0, 0, 0, 0.25)'
    },
    {
      key: 'profile',
      icon: 'md-person',
      barColor: '#003ec4',
      pressColor: 'rgba(0, 0, 0, 0.25)'
    }
  ]


  render() {
    return (
      <View>
        <BottomNavigation renderTab={this.renderTab} tabs={this.tabs}/>
      </View>
    )
  }
  renderTab = ({ tab, isActive }) => {
    return (
      <IconTab
        key={tab.key}
        isActive={isActive}
        renderIcon={this.renderIcon(tab.icon)}
      />
    )
  }
  renderIcon = iconName => ({ isActive }) => {
    return <Ionicons size={24} color="#e5e5e5" name={iconName} />
  }
}
