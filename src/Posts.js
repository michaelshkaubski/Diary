import React, { Component } from 'react';
import { TextField } from 'react-native-material-textfield';
import {  StyleSheet, View } from 'react-native';

export default class Posts extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: '',
      posts: [],
      post: [],
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

  createPost() {

    let postList = this.state.posts || []
    let postPublication = this.state.post || []

    postPublication.push(this.state.title)
    postPublication.push(this.state.body)

    postList.push(post)

    this.setState({
      this.state.posts: postList
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
          value={ title }
          onChangeText={ (title) => this.setState({ title }) }
        />
        <TextField
          label='Body'
          value={ body }
          onChangeText={ (body) => this.setState({ body }) }
        />
        <Button
          onPress={ createPost() }
          title="Sign Up"
          color="#09baa3"
          style={ styles.signUp }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  postCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
  },
})
