import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, FlatList, Text, View, TouchableOpacity } from 'react-native';
import PullListData from '../TestData/PullListData.example';

function PullListItem({ listItem }) {
  return (
    <TouchableOpacity style={styles.listContainer} onPress={() => alert('pressed')}>
      <View style={styles.listHeader}>
        <Text style={styles.listText}>{listItem.orderNum}</Text>
        <Text style={styles.listText}>{listItem.placedOn}</Text>
      </View>
      <View style={styles.listContent}>
        <Text style={styles.listText}>{listItem.jobName}</Text>
        <Text style={styles.listText}>{listItem.status}</Text>
      </View>
    </TouchableOpacity>
  )
}

const PullList = () => {
  const [pullArr, setPullArr] = useState(PullListData);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        // data={dataArr.sort((a, b) => a.picked - b.picked)}
        data={pullArr}
        renderItem={({ item }) => <PullListItem listItem={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>)
}

export default PullList

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
    justifyContent: 'space-around'
  },
  listText: {
    marginHorizontal: 5,
    fontSize: 18
  }
});
