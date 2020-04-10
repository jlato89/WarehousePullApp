import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, FlatList, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import TESTDATA from '../../TestData/testData.json';

const Orders = ({ navigation }) => {
  const [orderList, setOrderList] = useState(TESTDATA);
  const [isLoading, setIsLoading] = useState(false); //! TESTING, Change to true on prod

  const handleToggleItem = (quoteId, sku) => {
    // let newArr = JSON.parse(JSON.stringify(orderList));
    let newArr = [...orderList]; //! Not working correctly, mutates state
    newArr.forEach(el =>
      el.quote === quoteId
        ?
        el.data.forEach(data =>
          data.sku === sku ? data.picked = !data.picked : data)
        : el
    )
    setOrderList(newArr);
    // console.log(orderList);
  }
  // useEffect(() => {
  //   if (!orderList) {
  //     console.log('IF useEffect Triggered');
  //     fetch('http://192.168.1.136:8080/api/fetchOrders')
  //       .then(response => response.json())
  //       .then(latestOrders => setOrderList(latestOrders))
  //       .catch(err => console.log(err))
  //       .finally(() => setIsLoading(false))
  //   }
  //   console.log('ELSE useEffect Triggered');
  // });

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ?
        <ActivityIndicator size='large' />
        :
        <FlatList
          data={orderList}
          renderItem={({ item }) => <ListItem item={item} navigation={navigation} handleToggle={handleToggleItem} />}
          keyExtractor={(item, index) => index.toString()}
        />
      }
    </SafeAreaView>)
}

function ListItem({ navigation, item, handleToggle }) {
  const { quote, date, data, customerInfo } = item;
  const customer = customerInfo.first_name + ' ' + customerInfo.last_name;

  return (
    <TouchableOpacity
      style={styles.listContainer}
      onPress={() => navigation.navigate('PullDetails', { quote, customer, data, handleToggle })}
    >
      <View style={styles.listHeader}>
        <Text style={styles.listText}>{quote}</Text>
        <Text style={styles.listText}>{date}</Text>
      </View>
      <View style={styles.listContent}>
        <Text style={styles.listText} numberOfLines={1}>{customer}</Text>
        <Text style={styles.listText}>{PullStatus(data) ? 'Not Started' : 'Started'}</Text>
      </View>
    </TouchableOpacity>
  )
}


function PullStatus(items) {
  let status = items.every(el => el.picked !== true)
  return status
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
