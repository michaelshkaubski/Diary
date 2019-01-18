import React, { Component } from 'react';
import { Image, Button, StyleSheet, Text, View, Alert } from 'react-native';
import { AuthSession } from 'expo';
import * as firebase from 'firebase';

export default class SignIn extends Component {
  constructor(props) {
    super(props)

    var config = {
      apiKey: "AIzaSyAWmv1Hkh4oSauahZG9yCIhq470az2tWtQ",
      authDomain: "hilite-54ff0.firebaseapp.com",
      databaseURL: "https://hilite-54ff0.firebaseio.com",
      projectId: "hilite-54ff0",
      storageBucket: "hilite-54ff0.appspot.com",
      messagingSenderId: "272103104265"
    };

    var provider = new firebase.auth.FacebookAuthProvider();
  }

  authWithFacebook() {
    firebase.auth().signInWithRedirect(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
      console.log(user)
    }).catch(function(error){
      var errorCode = error.code;
      var credential = error.credential;
      if (errorCode) {
        Alert.alert("Uh oh, something went wrong, error code: " + errorCode)
      }
      if (credential) {
        Alert.alert("Uh oh, bad credentials: " + credential)
      }
    })
  }

  render() {

    return (
      <View style={{ flex: 1 }}>
        <Button
          onPress={ () => authWithFacebook() }
          color="00259e"
          title="Facebook"
        />
        <Posts style={{marginTop: 50}}/>
      </View>
    )
  }
}
