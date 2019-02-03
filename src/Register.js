import React, { Component } from 'react';
import { Image, Button, StyleSheet, Text, View, Alert } from 'react-native';
import { AuthSession } from 'expo';
import { TextField } from 'react-native-material-textfield'
import * as firebase from 'firebase';

export default class Register extends React.Component {
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

  signUpUser = (email, password) => {
    try {
      if (this.state.password < 6) {
        Alert.alert("Enter at least 6 characters")
      }
      firebase.auth().createUserWithEmailAndPassword(email, password)

    } catch {
      console.log(error)
      Alert.alert("Something went wrong")

    }
  }

  loginUser = (email, password) => {
    try {
      firebase.auth().singInWithEmailAndPassword(email, password).then(function(user){
        console.log(user)
      })

    } catch {
      console.log(error)
      Alert.alert("Something went wrong")

    }
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff', height: 400, width: 250, borderRadius: 20 }}>
        <Text style={{textAlign: 'center', fontSize:  25, color: '#000', marginTop: 50}}>SIGN UP</Text>
        <TextField
          label='EMAIL'
          value={ this.state.email }
          onChangeText={ (email) => this.setState({ email }) }
          style={{marginTop: 30}}
        />
        <TextField
          label='PASSWORD'
          value={ this.state.password }
          onChangeText={ (password) => this.setState({ password }) }
          style={{marginTop: 30}}
        />
        <Button
          onPress={ () => signUpUser(email,password) }
          color="#d2b3e8"
          title="SIGN UP"
          style={{width: 50, marginTop: 30}}
        />
        <Button
          onPress={ () => loginUser(email,password) }
          color="#d2b3e8"
          title="LOGIN"
          style={{width: 50, marginTop: 10}}
        />
      </View>
    )
  }
}
