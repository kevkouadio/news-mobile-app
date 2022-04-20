import * as React from 'react';
import { SafeAreaView, StyleSheet } from "react-native";
import { Searchbar } from 'react-native-paper';

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <SafeAreaView>
      <Searchbar
        style={styles.input}
        placeholder="Search for article"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 400,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 25,
  },
});
export default Search;
