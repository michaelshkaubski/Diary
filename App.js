import React, { Component } from 'react'
import { View, Text, StatusBar } from 'react-native'
import { Profile } from './Profile'
import { SignUp } from './SignUp'
import * as firebase from 'firebase'
import { Ionicons } from '@expo/vector-icons'
import BottomNavigation, { IconTab } from 'react-native-material-bottom-navigation'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      signUp: <SignUp />,
    }

    var config = {
      apiKey: "AIzaSyA8AE4HmcAtDP7WhLNIYJcTmHhvv6zwQ5M",
      authDomain: "hinet-d1a28.firebaseapp.com",
      databaseURL: "https://hinet-d1a28.firebaseio.com",
      projectId: "hinet-d1a28",
      storageBucket: "hinet-d1a28.appspot.com",
      messagingSenderId: "676739768355"
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
      if (user) {
        Alert.alert("Congrats! You signed up!")
      } else {
        this.state.signUp.style.display = 'block';
      }
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          { this.state.signUp }
        </View>
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
    return <Ionicons size={24} color="#eb0000" name={iconName} />
  }
}
