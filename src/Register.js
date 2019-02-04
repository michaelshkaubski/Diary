import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, Alert } from 'react-native';
import { AuthSession } from 'expo';
import { Container, Form, Item, Input, Label, Button } from 'native-base';
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

  signUpUser(email, password) {
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

  loginUser(email, password) {
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
      <View style={{ flex: 1, backgroundColor: '#fff'}}>
        <Container>
          <Form>
            <Item floatinglabel>
              <Label>EMAIL</Label>
              <Input
                value={ this.state.email }
                onChangeText={ (email) => this.setState({ email }) }
              />
            </Item>
            <Item floatinglabel>
              <Label>PASSWORD</Label>
              <Input
                value={ this.state.password }
                onChangeText={ (password) => this.setState({ password }) }
              />
            </Item>
            <Button
              rounded
              onPress={ () => signUpUser(email,password) }
              color="#d2b3e8"
              title="Sign Up"
              style={{width: 30, marginTop: 10}}
            />
            <Button
              rounded
              onPress={ () => loginUser(email,password) }
              color="#d2b3e8"
              title="Login"
              style={{width: 30, marginTop: 10}}
            />
          </Form>
        </Container>
      </View>
    )
  }
}
