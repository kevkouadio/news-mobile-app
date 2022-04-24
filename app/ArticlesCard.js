import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Linking, Dimensions } from 'react-native';
import { Card, Searchbar } from 'react-native-paper';

const { width, height } = Dimensions.get('window');

const ArticlesCard = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);

  const getArticles = async () => {
    if (searchQuery != '') {
      try {
        const response = await fetch('https://newsapi.org/v2/everything?q=' + searchQuery +
          '&apiKey=' + 'eecca520005045a2b9c19a88e5c74bfc');
        const json = await response.json();
        setData(json.articles);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    } else {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=' + 'eecca520005045a2b9c19a88e5c74bfc');
        const json = await response.json();
        setData(json.articles);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  }

  useEffect(() => {
    getArticles();
  }, [data]);
  //console.log(data)
  //console.log(searchQuery)
  return (
    <View>
      <Searchbar
        style={styles.input}
        placeholder="Search for article"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      {isLoading ? <ActivityIndicator /> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Card style={styles.card}>
              <Text style={styles.cardText} onPress={() => Linking.openURL(item.url)}>{item.title}</Text>
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
    fontSize: width * 0.04,
    //alignItems:"center", 
    position: "relative",
    marginRight: 110,
    fontFamily: 'TimesNewRomanPS-BoldMT'
    // left: width * .0,
    // right: width * .1,
  },
  card: {
    //width: width,
    height: 100,
    flex: 1,
    flexDirection: 'row',
    flexWrap: "wrap",
    textAlign: 'left',
    alignItems: "center",
    marginBottom: 2,
    left: width * .09,
    //right: width * .0,
    width: width * .95
    //borderEndColor: "black"
  },
  image: {
    // height: 10,
    width: width * .25,
    position: "absolute",
    marginLeft: width * .7,
    borderRadius: 4,
    // left: width * .1,
    // right: width * .0,
    height: height * 0.18,
  },
  input: {
    left: width * .0,
    right: width * .1,
    width: width * 0.95,
    margin: width * 0.09,
    backgroundColor: '#fff',
    borderRadius: 25,
  },
});
export default ArticlesCard;