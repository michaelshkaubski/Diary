import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, Text } from 'native-base';
import { Font, ImagePicker, Permissions } from 'expo';
import Loader from "react-native-modal-loader";

export default class Profile extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      fontLoaded: false,
      isLoading: true,
      image: null,
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

    this.setState({ fontLoaded: true })
  }

  selectPicture = async() => {
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    const { canselled, uri } = await ImagePicker.launchImageLibraryAsync({
      aspect: 1,
      allowEditing: true,
    });
    this.setState({
      image: uri
    })
  }

  takePicture = async() => {
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    const { canselled, uri } = await ImagePicker.launchCameraAsync({
      allowEditing: false,
    });
    this.setState({
      image: uri
    })
  }

  render() {
    if (this.state.fontLoaded === true) {
      return (
        <View style={{alignItems: 'center', textAlign: 'center'}}>
          <Image style={styles.image} source={{uri: this.state.image }}/>
          <Text style={{color: '#fff'}}>{this.props.email}</Text>
          <Button rounded bordered dark onPress={this.selectPicture}><Text style={{fontFamily: 'defaultFont'}}>Gallery</Text></Button>
          <Button rounded bordered dark onPress={this.takePicture}><Text style={{fontFamily: 'defaultFont'}}>Camera</Text></Button>
        </View>
      )
    } else {
      return (
        <Loader loading={this.state.isLoading} color="#000" />
      )
    }
  }
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 360,
    height: 250,
    width: 250,
  },
})
