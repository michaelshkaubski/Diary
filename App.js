import React, { Component } from 'react';
import { Form, Item, Label, Input, Textarea, Container, Header, Title, Content, Card, CardItem, Button, Right, Body } from 'native-base';
import { StyleSheet, Alert, Image, ImageBackground, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import * as firebase from 'firebase'

export default class AnatomyExample extends Component {

  constructor(props) {
    super(props)

    this.state = {
      id: 0,
      title: '',
      body: '',
      notes: [],
    }

    var config = {
      apiKey: "AIzaSyA8AE4HmcAtDP7WhLNIYJcTmHhvv6zwQ5M",
      authDomain: "hinet-d1a28.firebaseapp.com",
      databaseURL: "https://hinet-d1a28.firebaseio.com",
      projectId: "hinet-d1a28",
      storageBucket: "hinet-d1a28.appspot.com",
      messagingSenderId: "676739768355"
    };
    firebase.initializeApp(config);
  }

  createNote() {

    let noteList = this.state.notes || []

    noteList.push (
      <Card>
        <CardItem header>
          { this.state.title }
        </CardItem>
        <CardItem>
          <Body>
            { this.state.body }
          </Body>
        </CardItem>
      </Card>
    )

    this.setState ({
      title: <Form>
              <Item floatingLabel>
                <Label>Title...</Label>
                <Input />
              </Item>
             </Form>,
      body:  <Form>
              <Textarea rowSpan={5} bordered placeholder="Body..." />
             </Form>,
      notes: noteList,
      id: this.state.id++
    })

    firebase.database().ref('Posts/' + this.state.title).set({
      body: this.state.body
    });
  }

  render() {

    return (
      <View>
        <ImageBackground source={{uri: 'https://images.pexels.com/photos/1420440/pexels-photo-1420440.jpeg?cs=srgb&dl=android-wallpaper-dawn-dusk-1420440.jpg'}} style={{width: '100%', height: '100%'}}>
          <Header />
          <Button onPress={() => this.createNote()} rounded style={styles.addButton}><Icon name="plus"/></Button>
          { this.state.notes }
          </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  addButton: {
    backgroundColor: '#fff',
    color: '#260d01',
    alignSelf: 'flex-end',
  },

})
