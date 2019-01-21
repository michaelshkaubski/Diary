import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ImagePicker } from 'expo'

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
          title="Choose avatar"
          onPress={this._pickImage}
        />
      </View>
    )
  }
  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
}
