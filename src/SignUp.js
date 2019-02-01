import React, { Component } from 'react';
import { Image, Button, StyleSheet, Text, View, Alert } from 'react-native';
import { AuthSession } from 'expo';
import Profile from './SignUp';
import { TextField } from 'react-native-material-textfield'
import * as firebase from 'firebase';

export default class SignIn extends Component {
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

  }

  authWithEmailAndPassword() {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
      var errorCode = error.code;
      return (
        Alert.alert("Uh oh, something went wrong, error code:" + errorCode)
      )
    })
    firebase.database().ref('Users/' + this.state.email).set({
      password: this.state.password
    });
  }


  render() {
    return (
      <View style={{ flex: 1 }}>
        <Profile email = { this.state.email }/>
        <Text style={{textAlign: 'center', fontSize:  25, color: '#000'}}>Sign in</Text>
        <TextField
          label='EMAIL'
          value={ this.state.email }
          onChangeText={ (email) => this.setState({ email }) }
        />
        <TextField
          label='PASSWORD'
          value={ this.state.password }
          onChangeText={ (password) => this.setState({ password }) }
        />
        <Button
          onPress={ () => authWithEmailAndPassword() }
          color="#d2b3e8"
          title="SIGN UP"
        />
      </View>
    )
  }
}
