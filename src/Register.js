import React, { Component } from 'react';
import { AuthSession } from 'expo';
import * as firebase from 'firebase';
import { Text, Button } from 'native-base'
import { Image, StyleSheet, View, Alert, TouchableOpacity } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';


export default class Register extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      emailError: ''
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

  signUpUser() {
    try {
      if (this.state.password < 6) {
        this.setState({passwordError: "Enter at least 6 characters"})
      }
      if (this.state.password = '') {
        this.setState({passwordError: "This field is required"})
      }
      if (this.state.email = '') {
        this.setState({emailError: "This field is required"})
      }

      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)

      if (user) {
        Alert.alert("Congrats! You signed up")
      }
    } catch {
      Alert.alert("Something went wrong")

    }
  }

  loginUser() {
    try {
      firebase.auth().singInWithEmailAndPassword(this.state.email, this.state.password).then(function(user){
        console.log(user)
      })
      Alert.alert("Login was successful")
    } catch {
      Alert.alert("Something went wrong")

    }
  }

  render() {
    return (
      <View style={{backgroundColor: '#fff', height: 600}}>
        <View style={styles.formView}>
          <TextField
            label='Email'
            value={ this.state.email }
            onChangeText={ (email) => this.setState({ email }) }
            style={{fontSize: 16}}
            tintColor='#000'
            error={this.state.emailError}
          />
          <TextField
            label='Password'
            value={ this.state.password }
            onChangeText={ (password) => this.setState({ password }) }
            style={{fontSize: 16}}
            tintColor='#000'
          />
          <Button rounded dark onPress={() => this.signUpUser()} style={{marginLeft: 100, marginTop: 10}}>
            <Text>Sign Up</Text>
          </Button>
          <Button rounded dark onPress={() => this.loginUser()} style={{marginLeft: 100, marginTop: 10}}>
            <Text>Login</Text>
          </Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  formView: {
    shadowOffset: { width: 10, height: 10 },
    shadowRadius: 10,
    shadowColor: '#000',
    marginLeft: 20,
    marginTop: 20,
    padding: 10,
    width: 300,
    height: 300,
    borderRadius: 40
  }
})
