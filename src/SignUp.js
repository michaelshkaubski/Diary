import React, { Component } from 'react';
import { View, StyleSheet, Button, Alert } from 'react-native';
import * as firebase from 'firebase';
import { TextField } from 'react-native-material-textfield';

export default class SignUp extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
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

  userAuth() {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
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
    borderRadius:10,
  },
  signUp: {
    width: 300,
    height: 75,
  }
})
