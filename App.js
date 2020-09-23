import React from 'react';
import { StyleSheet, Button,Image, View, SafeAreaView, Text, Alert } from 'react-native';
import CategoryListItem from './Components/CategoryListitem'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CategoryListItem/>
        <CategoryListItem/>
        <CategoryListItem/>
        <CategoryListItem/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
        container: {
          alignItem: 'right',
          padding:20,
          borderRadius:4,
          backgroundColor: '#FFF',
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: {width:0, height:0},
          marginBottom: 16}
      })
//export default App;
