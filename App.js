import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Profile } from './src/Profile';
import { SignUp } from './src/SignUp';
import { Posts } from './src/Posts';
import * as firebase from 'firebase';
import { Ionicons } from '@expo/vector-icons';
import BottomNavigation, { IconTab } from 'react-native-material-bottom-navigation';

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      signUp: <SignUp />,
      posts: <Posts />,
      activeTab: 'feed',
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
      barColor: '#000',
      pressColor: 'rgba(247, 247, 247, 0.45)'
    },
    {
      key: 'search',
      icon: 'md-search',
      barColor: '#000',
      pressColor: 'rgba(247, 247, 247, 0.45)'
    },
    {
      key: 'profile',
      icon: 'md-person',
      barColor: '#000',
      pressColor: 'rgba(247, 247, 247, 0.45)'
    }
  ]

  componentDidMount() {
    StatusBar.setHidden(true);
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user && tab.isActive === true && tab.key == 'feed') {
        Alert.alert("Congrats! You signed up!")
        return (
          this.state.posts
        )
      } else {
        this.state.signUp.style.display = 'block'
        this.state.posts.style.display = 'none'
      }
    });
  }

  handleTabPress = (newTab, oldTab) => {
    this.setState({ activeTab: newTab.key })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          { this.state.signUp }
          { this.state.posts }
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
    return (
      <IconTab
        key={tab.key}
        isActive={isActive}
        renderIcon={this.renderIcon(tab.icon)}
      />
    )
  }

  renderIcon = iconName => ({ isActive }) => {
    return <Ionicons size={24} color="#eb0000" name={iconName} />
  }
}
