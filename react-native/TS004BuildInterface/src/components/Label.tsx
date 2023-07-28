import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface CategoryProps {
  title: string;
}

const Label = ({title}: CategoryProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleLabel}>{title}</Text>
      </View>
      <View>
        <Text>Xem thêm</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleLabel: {
    fontSize: 14,
    color: '#F00',
    fontWeight: '700',
  },
});

export default Label;
