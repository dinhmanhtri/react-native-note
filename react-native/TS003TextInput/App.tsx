/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const hotGirls = [
  {
    id: 1,
    thumbnail: 'https://i.pravatar.cc/150?img=28',
    name: 'Thủy Phương Diễm',
    status: 'Online',
  },
  {
    id: 2,
    thumbnail: 'https://i.pravatar.cc/150?img=44',
    name: 'Ngô Trâm Anh',
    status: 'Online',
  },
  {
    id: 4,
    thumbnail: 'https://i.pravatar.cc/150?img=1',
    name: 'Triệu Thu Oanh',
    status: 'Online',
  },
  {
    id: 5,
    thumbnail: 'https://i.pravatar.cc/150?img=29',
    name: 'Phạm Nhã Hồng',
    status: 'Offline',
  },
  {
    id: 8,
    thumbnail: 'https://i.pravatar.cc/150?img=5',
    name: 'Lục Quỳnh Trâm',
    status: 'Online',
  },
  {
    id: 9,
    thumbnail: 'https://i.pravatar.cc/150?img=9',
    name: 'Nguyễn Kim Anh',
    status: 'Online',
  },
  {
    id: 10,
    thumbnail: 'https://i.pravatar.cc/150?img=19',
    name: 'Nguyễn Uyển Khanh',
    status: 'Offline',
  },
];

type ItemProps = {
  thumbnail: string;
  name: string;
  status: string;
};

const Item = ({thumbnail, name, status}: ItemProps) => {
  return (
    <View style={styles.item}>
      <Image style={styles.avatar} source={{uri: thumbnail}} />
      <View style={{marginHorizontal: 10}}>
        <Text style={styles.nameText}>{name}</Text>
        <Text>{status}</Text>
      </View>
    </View>
  );
};

function App(): JSX.Element {
  const [number, setNumber] = useState('');

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <ImageBackground
        style={{flex: 1}}
        source={require('./assets/images/backImage.jpg')}
        resizeMode="cover">
        <View style={{flex: 1, padding: 10}}>
          <TextInput
            style={{borderWidth: 1, borderColor: '#a60383'}}
            autoFocus={true}
            placeholder="Vui lòng nhập một số"
            keyboardType="numeric"
            value={number}
            onChangeText={num => {
              setNumber(num);
            }}
          />

          <Text style={{margin: 10, fontWeight: 'bold', color: '#0876c9'}}>
            Giá trị bạn vừa nhập: {number}
          </Text>
        </View>

        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <Image
            source={{
              uri: 'https://vntalking.cdn.vccloud.vn/wp-content/uploads/2019/12/nodejs-debugging.png',
            }}
            style={{width: 200, height: 200}}
          />
        </View>

        <View
          style={{
            flex: 2,
            flexDirection: 'column',
          }}>
          <View style={{alignItems: 'center', backgroundColor: '#cc3333'}}>
            <Text style={styles.textHeader}>Demo Danh sách bằng FlatList</Text>
            <Text style={{color: '#FFFFFF'}}>Manh Tri</Text>
          </View>
          <FlatList
            data={hotGirls}
            renderItem={({item}) => (
              <Item
                thumbnail={item.thumbnail}
                name={item.name}
                status={item.status}
              />
            )}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    borderColor: '#1974d2',
    borderWidth: 2,
  },

  nameText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },

  textHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default App;
