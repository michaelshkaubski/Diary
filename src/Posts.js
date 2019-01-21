import React, { Component } from 'react';
import { TextField, SwipeRow, Button } from 'native-base';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as firebase from 'firebase';

export default class Posts extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: '',
      posts: [],
    }

    var config = {
      apiKey: "AIzaSyAWmv1Hkh4oSauahZG9yCIhq470az2tWtQ",
      authDomain: "hilite-54ff0.firebaseapp.com",
      databaseURL: "https://hilite-54ff0.firebaseio.com",
      projectId: "hilite-54ff0",
      storageBucket: "hilite-54ff0.appspot.com",
      messagingSenderId: "272103104265"
    };

  }

  showPost() {
    return (
      <View style={ styles.postCard }>
        <Text style={ styles.title }>{ this.state.title }</Text>
        <Text style={ style.body }>{ this.state.body }</Text>
      </View>
    )
  }

  createPost() {
    let postList = this.state.posts || []

    postList.push (
      <SwipeRow
        leftOpenValue={75}
        rightOpenValue={-75}
        left={
          <Button onPress={ () => alert('Add') }>
            <Iconicons name="md-create" />
          </Button>
        }
        body={
          <View>
            <TouchableOpacity onPress = { () => showPost() }>
              <Text>{ thid.state.title }</Text>
            </TouchableOpacity>
          </View>
        }
        right={
          <Button danger onPress={ () => alert('Trash') }>
            <Iconicons name="md-trash" />
          </Button>
        }
      />
    )

    this.setState({
      posts: postList
    })

    firebase.database().ref('Posts/' + this.state.title).set({
      body: this.state.body
    });

  }

  render() {
    return (
      <View style = { styles.postCard }>
        <TextField
          label='Title'
          value={ this.state.title }
          onChangeText={ (title) => this.setState({ title }) }
        />
        <TextField
          label='Body'
          value={ this.state.body }
          onChangeText={ (body) => this.setState({ body }) }
        />
        <Button
          onPress={ () => this.createPost() }
          title="Share"
          color="#d3b2e8"
          style={{width: 100, height: 30, color: '#fff'}}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  postCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 600,
    height: 400,
  },
  title: {
    fontSize: 17,
    color: '#000',
  },
  body: {
    fontSize: 14,
    color: '#000',
    marginTop: 10,
  }
})
