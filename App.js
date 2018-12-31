import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
<head>
  <link rel="stylesheet" href="material.css"/>
  <script src="material.js"></script>
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
</head>

export default class App extends React.Component {
  render() {
    return (
      <FABButton colored ripple><Icon name="add"/></FABButton>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
