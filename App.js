import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style ={{padding:50}} >
      <View style ={{flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center'}}>
        <TextInput placeholder ="Course Goals" style ={{
          borderColor:'black',
          borderWidth:1,
          padding:10,
          width: '80%'
        }}/>
        <Button title="ADD" />
      </View>
      <View >

      </View>
    </View>
  );
}


