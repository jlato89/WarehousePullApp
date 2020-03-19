import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import PullData from '../../TestData/PullDetails.example';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

function Item({ data }) {
  return (
    <View style={styles.item}>
      <Text style={[styles.itemText, styles.qty]}>[ {data.qty} ]</Text>
      <Text style={[styles.itemText, styles.style]}>{data.style}</Text>
      <Text style={[styles.itemText, styles.boxSku]}>{data.boxSku}</Text>
      <Text style={[styles.itemText, styles.location]}>{data.location}</Text>
      {/* <Icon
        style={styles.checkMark}
        name="check-square"
        color="white"
      /> */}
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={PullData}
        renderItem={({ item }) => <Item data={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 4,
    marginHorizontal: 16,
  },
  itemText: {
    fontSize: 18
  },
  qty: {
    flex: 1,
    // fontSize: 20,
    fontWeight: 'bold'
  },
  style: {
    flex: 1,
    textAlign: 'right'
  },
  boxSku: {
    flex: 3,
    textAlign: 'right'
  },
  location: {
    flex: 2,
    // fontSize: 20,
    textAlign: 'right',
    // fontWeight: 'bold'
  },
  checkMark: {
    flex: 2,
    fontSize: 30,
    alignSelf: 'center',
    textAlign: 'right'
  }
});
