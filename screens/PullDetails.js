import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, FlatList, Button, } from 'react-native';
import ListViewItem from '../components/ListViewItem/ListViewItem';

const PullDetails = ({ navigation, route }) => {
  const { orderNum, custName, notes, pullList } = route.params.order;
  const [dataArr, setDataArr] = useState(pullList);

  const isFinished = dataArr.every((item => item.picked !== false));

  const handleToggleItem = itemId => {
    const newArr = dataArr.map(el =>
      (el.id === itemId ? Object.assign({}, el, { 'picked': !el.picked }) : el))
    setDataArr(newArr)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{orderNum}</Text>
        <Text style={styles.headerText}>{custName}</Text>
      </View>
      <View style={styles.listItems}>
        <FlatList
          data={dataArr.sort((a, b) => a.picked - b.picked)}
          renderItem={({ item }) =>
            <ListViewItem
              data={item}
              toggleItem={handleToggleItem}
            />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={styles.comments}>
        <Text style={styles.commentsText}>{notes ? notes : 'There are currently no Notes'}</Text>
      </View>
      <Button
        style={styles.submitBtn}
        title='Submit'
        disabled={!isFinished}
        onPress={() => alert('Pullsheet marked as Pulled')}
      />
    </SafeAreaView>
  );
}

export default PullDetails

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  headerText: {
    fontSize: 16,
  },
  listItems: {
    flex: 15,
  },
  comments: {
    flex: 1,
    paddingHorizontal: 5,
  },
  commentsText: {
    fontSize: 16,
  },
  submitBtn: {
    flex: 1,
  }
});
