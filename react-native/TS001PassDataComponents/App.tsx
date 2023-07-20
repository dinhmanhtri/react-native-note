/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function DisplayCount({counter}: {counter: number}): JSX.Element {
  console.log(counter);
  return (
    <View>
      <Text style={styles.displayCount}>Bộ đếm {counter}</Text>
    </View>
  );
}

function App(): JSX.Element {
  const minValue: number = 0;
  const [count, setCount] = useState(minValue);

  const handleCount = (countInput: number, typeBtn: boolean) => {
    setCount(typeBtn ? countInput + 1 : countInput - 1);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Truyền dữ liệu giữa các component</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.buttonInline}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleCount(count, true);
            }}>
            <Text>Tăng lên 1 đơn vị</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleCount(count, false);
            }}>
            <Text>Giảm 1 đơn vị</Text>
          </TouchableOpacity>
        </View>
        <View>
          <DisplayCount counter={count} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 15,
    justifyContent: 'center',
  },

  buttonInline: {
    flexDirection: 'row',
    marginLeft: 20,
    justifyContent: 'space-evenly',
    padding: 10,
  },

  button: {
    backgroundColor: '#DDDDDD',
    borderRadius: 10,
  },

  header: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#cc3333',
  },

  textHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  displayCount: {
    padding: 10,
    color: '#000000',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
