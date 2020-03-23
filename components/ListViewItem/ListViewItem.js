import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListViewItem = ({ data, toggleItem }) => {
  return (
    <View style={styles.item}>
      <Text style={[styles.itemText, styles.qty]}>[ {data.qty} ]</Text>
      <Text style={[styles.itemText, styles.style]}>{data.style}</Text>
      <Text style={[styles.itemText, styles.boxSku]}>{data.boxSku}</Text>
      <Text style={[styles.itemText, styles.location]}>{data.location}</Text>
      <Button
        title='done'
        disabled={data.checked}
        // style={styles.checkMark}
        // name="check-square"
        // color="white"
        onPress={() => toggleItem(data.id)}
      />
    </View>
  )
}

export default ListViewItem

const styles = StyleSheet.create({
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
