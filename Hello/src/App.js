import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View ref='first' style={[styles.commom, styles.first]}>
          <View style={styles.subViews} />
          <View style={styles.subViews} />
          <View style={styles.subViews} />
        </View>

        <View ref='second' style={[styles.commom, styles.second]}>
          <View style={styles.subViews} />
          <View style={styles.subViews} />
          <View style={styles.subViews} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },

  commom: {
    margin: 40,
    borderColor: 'red',
    borderWidth: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },

  first: {
    flex: 1,
    flexDirection: 'row'
  },

  second: {
    flex: 1,
    flexDirection: 'column'
  },

  subViews: {
    height: 50,
    width: 50,
    backgroundColor: 'blue'
  }
})
