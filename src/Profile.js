import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SignUp from './SignUp';

export default class Profile extends React.Component {

  render() {
    return (
      <View>
        <Text>{ this.props.email }</Text>
      </View>
    )
  }
}
