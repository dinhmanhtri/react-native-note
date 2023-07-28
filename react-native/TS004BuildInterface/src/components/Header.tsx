import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>CODE APP</Text>
      </View>
      <View>
        <Image source={require('../assets/logo.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    color: '#F00',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '700',
  },
});

export default Header;
