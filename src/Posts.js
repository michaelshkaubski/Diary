import React, { Component } from 'react';
import { TextField } from 'react-native-material-textfield';
import {  StyleSheet, View, Button } from 'react-native';
import * as firebase from 'firebase';

export default class Posts extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: '',
      posts: [],
      post: [],
    }

  }

  createPost() {

    let postList = this.state.posts || []
    let postPublication = this.state.post || []

    postPublication.push(this.state.title)
    postPublication.push(this.state.body)

    postList.push(post)

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
          onPress={ createPost() }
          title="Share"
          color="#09baa3"
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
