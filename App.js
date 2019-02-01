import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import SignUp from './src/SignUp';
import Posts  from './src/Posts';
import Search  from './src/Search';
import Feed  from './src/Feed';
import Profile  from './src/Profile';
import * as firebase from 'firebase';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
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
      icon: 'md-book',
      barColor: '#fff',
      pressColor: 'rgba(0, 0, 0, 0.07)',
      content: <Profile />
    },
    {
      key: 'search',
      icon: 'md-search',
      barColor: '#fff',
      pressColor: 'rgba(0, 0, 0, 0.07)',
      content: <Posts />
    },
    {
      key: 'profile',
      icon: 'person-outline',
      barColor: '#fff',
      pressColor: 'rgba(0, 0, 0, 0.07)',
      content: <SignUp />
    }
  ]

  componentWillMount() {
    this.setState({
      content: this.tabs[0].content
    })
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#171717'  }}>
        <View style={{flex: 1}}>
          { this.state.content }
        </View>
        <BottomNavigation
          renderTab={this.renderTab}
          tabs={this.tabs}
          onTabPress={(newTab, oldTab) => {
            this.setState({
              content: newTab.content,
            })
          }}
        />
      </View>
    )
  }

  renderTab = ({tab, isActive}) => {
    let color = '#969696';
    let activeColor = "#171717"
    let tabName = tab.key

    if (isActive) {
      color = activeColor
    }

    return (
      <IconTab
        key={tab.key}
        isActive={isActive}
        renderIcon={this.renderIcon(tab.icon, color, tabName)}
      />
    )
  }

  renderIcon = (iconName, color, tabName) => ({ isActive }) => {
    if (tabName === 'profile')  {
      return <MaterialIcons size={25} color={color} name={iconName} />
    } else {
      return <Ionicons size={25} color={color} name={iconName} />
    }
  }
}
