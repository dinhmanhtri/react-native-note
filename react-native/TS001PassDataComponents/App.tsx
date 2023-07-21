import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
} from 'react-native';

// App.js
const ChildComponent = ({
  counter,
  parentCallback,
}: {
  counter: number;
  parentCallback: (childData: string) => void;
}) => {
  const [text, setText] = useState('');
  const send = () => {
    parentCallback(text);
    setText('');
  };

  return (
    <View style={styles.childComponent}>
      <Text style={{color: '#000000', fontWeight: 'bold', fontSize: 40}}>
        Bộ đếm {counter}
      </Text>
      <TextInput
        value={text}
        placeholder="Gửi gì cho cha đi!"
        onChangeText={setText}
        style={styles.input}
      />
      <TouchableOpacity
        onPress={send}
        style={{...styles.btn, backgroundColor: '#be29ec'}}>
        <Text style={styles.btnText}> Send </Text>
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  const [count, setCount] = useState(0);
  const [childrendContent, setChildrendContent] = useState(`Món quà từ con`);

  const callbackFunction = (childData: string) => {
    setChildrendContent(childData);
  };

  const handleCount = (countInput: number, typeCount: boolean) => {
    setCount(typeCount ? countInput + 1 : countInput >= 1 ? countInput - 1 : 0);
  };

  return (
    <View style={{flex: 1}}>
      <View style={{alignItems: 'center', backgroundColor: '#0d324d'}}>
        <Text style={styles.textHeader}>
          Truyền dữ liệu giữa các components
        </Text>
        <Text style={{color: '#FFFFFF'}}>Manh Tri</Text>
      </View>
      <View style={styles.body}>
        <View style={{flex: 1}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 25,
              color: '#000000',
            }}>
            Quà từ con:
          </Text>
          <Text
            style={{textAlign: 'center', fontSize: 20, fontStyle: 'italic'}}>
            {childrendContent}
          </Text>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            onPress={() => handleCount(count, true)}
            style={{...styles.btn, backgroundColor: '#3d85c6'}}>
            <Text style={styles.btnText}> Tăng lên 1 đơn vị</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleCount(count, false)}
            style={{...styles.btn, backgroundColor: '#3d85c6'}}>
            <Text style={styles.btnText}> Giảm đi 1 đơn vị</Text>
          </TouchableOpacity>
        </View>
        <ChildComponent counter={count} parentCallback={callbackFunction} />
        <View style={{flex: 1}}>
          <TouchableOpacity
            onPress={() => Alert.alert('Bạn đã chạm vào tôi đấy à!')}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>💪 Custom Button</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderColor: '#0d324d',
    borderWidth: 5,
  },
  btn: {
    backgroundColor: '#086972',
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 10,
    borderRadius: 10,
  },
  btnText: {
    fontSize: 18,
    color: '#fff',
  },
  text: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: 'green',
  },
  childComponent: {
    flex: 1,
    borderColor: '#ffe4e1',
    borderWidth: 2,
    width: '100%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffe4e1',
  },
  input: {
    borderWidth: 1,
    borderColor: '#be29ec',
    borderRadius: 8,
    width: '50%',
  },
  btnContainer: {
    flex: 1,
  },
});

export default App;
