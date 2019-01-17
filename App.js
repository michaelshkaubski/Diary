import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import Posts  from './src/Posts';
import SignIn  from './src/SignIn';
import * as firebase from 'firebase';
import { Ionicons } from '@expo/vector-icons';
import BottomNavigation, { IconTab } from 'react-native-material-bottom-navigation';

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeTab: 'feed',
      logged: 0,
    }

    var config = {
      apiKey: "AIzaSyAWmv1Hkh4oSauahZG9yCIhq470az2tWtQ",
      authDomain: "hilite-54ff0.firebaseapp.com",
      databaseURL: "https://hilite-54ff0.firebaseio.com",
      projectId: "hilite-54ff0",
      storageBucket: "hilite-54ff0.appspot.com",
      messagingSenderId: "272103104265"
    };

    firebase.initializeApp(config);

  }

  tabs = [
    {
      key: 'feed',
      icon: 'md-bookmarks',
      barColor: '#fff',
      pressColor: 'rgba(0, 0, 0, 0.07)'
    },
    {
      key: 'search',
      icon: 'md-search',
      barColor: '#fff',
      pressColor: 'rgba(0, 0, 0, 0.07)'
    },
    {
      key: 'profile',
      icon: 'md-person',
      barColor: '#fff',
      pressColor: 'rgba(0, 0, 0, 0.07)'
    }
  ]

  handleTabPress = (newTab, oldTab) => {
    this.setState({ activeTab: newTab.key })
    this.renderIcon(newTab.icon, '#00c4aa')
    this.renderIcon(oldTab.icon, 'white')
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}><SignIn /></View>
        <View style={{ flex: 1 }}><Posts /></View>
        <BottomNavigation
          renderTab={this.renderTab}
          tabs={this.tabs}
          onTabPress={this.handleTabPress}
        />
      </View>
    )
  }

  renderTab = ({ tab, isActive }) => {
    return (
      <IconTab
        key={tab.key}
        isActive={isActive}
        renderIcon={this.renderIcon(tab.icon, 'white')}
      />
    )
  }

  renderIcon = iconName => ({ isActive }) => {
    if (isActive) {
      color = '#00c4aa';
    }
    return <Ionicons size={24} color={color} name={iconName} />
  }
}
