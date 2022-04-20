import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  Search  from "./app/Search";
import ArticlesCard from './app/ArticlesCard';
import { ActivityIndicator, FlatList } from 'react-native';
import { Card } from 'react-native-paper'

export default function App() {
  
  return (
    <View style={styles.container}>
      <Search />
      <ArticlesCard />
      <StatusBar style="auto" />
      {/* <View style={styles.footer}>
      <Text style={styles.textStyle}>Bottom View</Text>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EE5407',
    alignItems: 'center',
    //justifyContent: 'space-between',
  },
  footer: {
    width: '100%',
    height: 50,
    backgroundColor: '#EE5407',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
  },
  textStyle: {
    color: '#fff',
    fontSize: 18,
  },
});
