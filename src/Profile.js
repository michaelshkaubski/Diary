import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import SignUp from './SignUp';
import { ImagePicker } from 'expo';

export default class Profile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      image: null,
    }

  }

  render() {
    return (
      <View>
        <Text>{ this.props.email }</Text>
        { this.state.image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} /> }
        <Button
          title="CHOOSE AVATAR"
          onPress={this._pickImage}
          color="#d3b2e8"
        />
      </View>
    )
  }
  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
}
