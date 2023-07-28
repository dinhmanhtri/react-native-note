import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '../../components/Header';
import CategoryList from './CategoryList';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <CategoryList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 15,
  },
});

export default Home;
