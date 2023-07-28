import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Label from '../../components/Label';

const CategoryList = () => {
  return (
    <>
      <View>
        <Label title="Xem thêm" />
      </View>
      <View style={styles.container}>
        <Image
          style={styles.item}
          source={require('../../assets/category.png')}
        />
        <Image
          style={styles.item}
          source={require('../../assets/category.png')}
        />
        <Image
          style={styles.item}
          source={require('../../assets/category.png')}
        />
        <Image
          style={styles.item}
          source={require('../../assets/category.png')}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  item: {
    overflow: 'hidden',
    width: '20%',
    height: 80,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
});

export default CategoryList;
