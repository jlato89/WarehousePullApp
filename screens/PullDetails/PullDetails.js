import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import ListViewItem from '../../components/ListViewItem/ListViewItem';
import PullData from '../../TestData/PullDetails.example';

export default function App() {
  const [dataArr, setDataArr] = useState(PullData);

  const handleToggleItem = itemId => {
    console.log('event handled', itemId);
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dataArr}
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
