import React, { useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import ListViewItem from '../../components/ListViewItem/ListViewItem';
import PullData from '../../TestData/PullDetails.example';

export default function App() {
  const [dataArr, setDataArr] = useState(PullData);

  const handleToggleItem = itemId => {
    const newArr = dataArr.map(el =>
      (el.id === itemId ? Object.assign({}, el, { 'picked': !el.picked }) : el))
    setDataArr(newArr)
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dataArr.sort((a, b) => a.picked - b.picked)}
        renderItem={({ item }) =>
          <ListViewItem
            data={item}
            toggleItem={handleToggleItem}
          />}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
