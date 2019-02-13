import React, { Component } from 'react';
import { AuthSession, Font } from 'expo';
import * as firebase from 'firebase';
import { Text, Button } from 'native-base'
import { Image, StyleSheet, View, Alert, TouchableOpacity } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';
import Loader from "react-native-modal-loader";


export default class Register extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      fontLoaded: false,
      isLoading: true,
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

  async componentDidMount() {
    await Font.loadAsync({
      'defaultFont': require('../assets/Fonts/Archivo_Narrow/ArchivoNarrow-Bold.ttf'),
      'viewFont': require('../assets/Fonts/Abril_Fatface/AbrilFatface-Regular.ttf'),
      'titleFont': require('../assets/Fonts/Josefin_Slab/JosefinSlab-Bold.ttf'),
    })

    this.setState({ fontLoaded: true})
  }

  signUpUser() {
    try {
      if (this.state.password < 6) {
        Alert.alert("Enter at least 6 characters")
      }
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)

      if (typeof user !== 'undefined') {
        this.props.loadProfile(this.state.email)
        this.props.changeIsLoggedInState(true)
      }

    } catch {
      console.log(error)
      Alert.alert("Something went wrong")

    }
  }

  loginUser() {
    try {
      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(function(user){
        console.log(user)
      })

      if (typeof user !== 'undefined') {
        this.props.loadProfile(this.state.email)
        this.props.changeIsLoggedInState(true)
      }

    } catch {
      console.log(error)
      Alert.alert("Something went wrong")

    }
  }

  render() {
    if (this.state.fontLoaded) {
      return (
        <View style={{backgroundColor: '#fff', height: 600}}>
          <Text style={{color: '#000', marginTop: 40, marginLeft: 140, fontSize: 25, fontFamily: "titleFont"}}>Hilights</Text>
          <View style={styles.formView}>
            <TextField
              label='Email'
              value={ this.state.email }
              onChangeText={ (email) => this.setState({ email }) }
              style={{fontSize: 16}}
              tintColor='#000'
            />
            <TextField
              label='Password'
              value={ this.state.password }
              onChangeText={ (password) => this.setState({ password }) }
              style={{fontSize: 16}}
              tintColor='#000'
              secureTextEntry={ true }
            />
            <Button rounded dark onPress={() => this.signUpUser()} style={{marginLeft: 96, marginTop: 20}}>
              <Text style={{fontFamily: "defaultFont"}}>Sign Up</Text>
            </Button>
            <Button rounded dark onPress={() => this.loginUser()} style={{marginLeft: 102.5, marginTop: 10}}>
              <Text style={{fontFamily: "defaultFont"}}>Login</Text>
            </Button>
          </View>
        </View>
      )
    } else {
      return (
        <Loader loading={this.state.isLoading} color="#171717" />
      )
    }
  }
}

const styles = StyleSheet.create({
  formView: {
    marginLeft: 30,
    marginTop: 20,
    padding: 20,
    width: 300,
    height: 300,
  },

  info: {
    borderRadius: 40,
    backgroundColor: '#fff',
    textAlign: 'center',
    marginTop: 20,
    height: 200,
    width: 200
  }
})
