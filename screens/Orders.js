import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, FlatList, Text, View, TouchableOpacity } from 'react-native';
import CurrentOrders from '../TestData/CurrentOrders.example';

function ListItem({ navigation, item }) {
  return (
    <TouchableOpacity
      style={styles.listContainer}
      onPress={() => navigation.navigate('PullDetails', { pullList: item.pullList })
      }>
      <View style={styles.listHeader}>
        <Text style={styles.listText}>{item.orderNum}</Text>
        <Text style={styles.listText}>{item.placedOn}</Text>
      </View>
      <View style={styles.listContent}>
        <Text style={styles.listText} numberOfLines={1}>{item.custName}</Text>
        <Text style={styles.listText}>{item.status}</Text>
      </View>
    </TouchableOpacity>
  )
}

const Orders = ({ navigation }) => {
  const [pullArr, setPullArr] = useState(CurrentOrders);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        // data={dataArr.sort((a, b) => a.picked - b.picked)}
        data={pullArr}
        renderItem={({ item }) => <ListItem item={item} navigation={navigation} />}
        keyExtractor={item => item.id.toString()}
      />
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
