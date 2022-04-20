import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-paper';
//import Dimensions from 'Dimensions';

const ArticlesCard = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=c221b6edf9704a38bb066216200581f3');
      const json = await response.json();
      setData(json.articles);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);
  //console.log(data)
  return (
    <View >
      {isLoading ? <ActivityIndicator /> : (
        <FlatList 
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Card style={styles.card}>
              <Text style={styles.cardText}>{item.title}</Text>
              <Card.Cover style={styles.image} source={{ uri: item.urlToImage }} />
            </Card>
          )}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  cardText: {
    textAlign: 'left', 
    fontSize: 20, 
    //alignItems:"center", 
    position:"relative", 
    marginRight:100
  },
  card: {
    width: 400,
    height: 100,
    flex: 1,
    flexDirection: 'row',
    flexWrap: "wrap",
    textAlign: 'left',
    alignItems: "center",
    marginBottom: 5,
  },
  image: {
    height: 100,
    width: 100,
    position: "absolute",
    marginLeft: 300,
    borderRadius: 4
  }
});
export default ArticlesCard;