
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import "./config/ReactotronConfig"

export default class App extends Component{

  render(){
    return(

      <View style={styles.container}>
        <Text style={styles.welcome}>Hellow Word</Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#F5FCFF'
  },
  welcome:{
    fontSize:20,
    textAlign:'center',
    margin:10,
  }
})
