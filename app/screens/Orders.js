import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, FlatList, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import CurrentOrders from '../../TestData/CurrentOrders.example';

function ListItem({ navigation, item }) {
  const description = item.user + ' : ' + item.friendly_name;
  return (
    <TouchableOpacity
      style={styles.listContainer}
    // onPress={() => navigation.navigate('PullDetails', { order: item })}
    >
      <View style={styles.listHeader}>
        <Text style={styles.listText}>{item.orderNum || item.quote}</Text>
        <Text style={styles.listText}>{item.placedOn || item.date}</Text>
      </View>
      <View style={styles.listContent}>
        <Text style={styles.listText} numberOfLines={1}>{item.custName || description}</Text>
        <Text style={styles.listText}>{item.status || '[STATUS]'}</Text>
      </View>
    </TouchableOpacity>
  )
}

const Orders = ({ navigation }) => {
  const [pullArr, setPullArr] = useState();
  const [isLoading, setIsLoading] = useState(true);
  console.log('Current Pull Array', pullArr);

  useEffect(() => {
    if (isLoading) {
      console.log('IF useEffect Triggered');
      fetch('http://192.168.1.136:8080/api/fetchOrders')
        .then(response => response.json())
        .then(latestOrders => setPullArr(latestOrders))
        .catch(err => console.log(err))
        .finally(() => setIsLoading(false))
    }
    console.log('ELSE useEffect Triggered');
  });

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ?
        <ActivityIndicator size='large' />
        :
        <FlatList
          // data={dataArr.sort((a, b) => a.picked - b.picked)}
          data={pullArr}
          renderItem={({ item }) => <ListItem item={item} navigation={navigation} />}
          keyExtractor={(item, index) => index.toString()}
        />
      }
    </SafeAreaView>)
}

export default Orders

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5
  },
  listContainer: {
    borderWidth: 2,
    marginVertical: 5
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  listContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20

  },
  listText: {
    marginHorizontal: 5,
    fontSize: 18,
    maxWidth: '60%'
  }
});
