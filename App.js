import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import SignIn from './src/SignIn'
import Posts  from './src/Posts';
import Search  from './src/Search';
import Feed  from './src/Feed';
import * as firebase from 'firebase';
import { Ionicons } from '@expo/vector-icons';
import BottomNavigation, { IconTab } from 'react-native-material-bottom-navigation';

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeTab: 'feed',
      content: null,
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
      pressColor: 'rgba(0, 0, 0, 0.07)',
      content: <Feed />
    },
    {
      key: 'search',
      icon: 'md-search',
      barColor: '#fff',
      pressColor: 'rgba(0, 0, 0, 0.07)',
      content: <Search />
    },
    {
      key: 'profile',
      icon: 'md-person',
      barColor: '#fff',
      pressColor: 'rgba(0, 0, 0, 0.07)',
      content: <Posts />
    }
  ]

  handleTabPress = (newTab, oldTab) => {
    this.renderIcon(newTab.icon, '#d3b2e8')
  }

  componentWillMount() {
    StatusBar.setHidden() == true
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          { this.state.content }
        </View>
        <BottomNavigation
          renderTab={this.renderTab}
          tabs={this.tabs}
          onTabPress={this.handleTabPress}
        />
      </View>
    )
  }

  renderTab = ({ tab, isActive }) => {
    if (isActive) {
      this.setState({content: tab.content})
    }
    return (
      <IconTab
        key={tab.key}
        isActive={isActive}
        renderIcon={this.renderIcon(tab.icon, '#d3b2e8')}
      />
    )
  }

  renderIcon = (iconName, color) => ({ isActive }) => {
    if (isActive) {
      color = '#d3b2e8';
    }
    return <Ionicons size={24} color={color} name={iconName} />
  }
}
