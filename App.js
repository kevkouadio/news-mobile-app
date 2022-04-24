import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import ArticlesCard from './app/ArticlesCard';


export default function App() {
  
  return (
    <ScrollView>
    <View style={styles.container}>
      <ArticlesCard />
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EE5407',
    alignItems: 'center',
  },
  textStyle: {
    color: '#fff',
    fontSize: 18,
  },
});
