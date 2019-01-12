import React, { Component } from 'react'
import { View, StyleSheet, Button, Alert } from 'react-native'
import * as firebase from 'firebase'
import { TextField } from 'react-native-material-textfield'

export default class SignUp extends React.Component {

  constructor(props) {
    super(props)

    var config = {
      apiKey: "AIzaSyA8AE4HmcAtDP7WhLNIYJcTmHhvv6zwQ5M",
      authDomain: "hinet-d1a28.firebaseapp.com",
      databaseURL: "https://hinet-d1a28.firebaseio.com",
      projectId: "hinet-d1a28",
      storageBucket: "hinet-d1a28.appspot.com",
      messagingSenderId: "676739768355"
    };

    firebase.initializeApp(config);

    var token = result.credential.accessToken;
    var user = result.user;
    var provider = new firebase.auth.GoogleAuthProvider();

  }

  userAuth() {
    firebase.auth().signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
    }).catch(function(error) {

        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;

        Alert.alert("Something went wrong, error code: " + errorCode)
      });
  }

  render() {
    return (
      <View style = { styles.card }>
        <TextField
          label='Email'
          value={ email }
          onChangeText={ (email) => this.setState({ email }) }
        />
        <TextField
          label='Password'
          value={ password }
          onChangeText={ (password) => this.setState({ password }) }
        />
        <Button
          onPress={ userAuth() }
          title="Sign Up"
          color="#09baa3"
          style={ styles.signUp }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    fontColor: '#000',
    borderRadius:10,
  },
  signUp: {
    width: 300,
    height: 75,
    fontColor: '#fff',
  }
})
