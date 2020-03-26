import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ListViewItem = ({ data, toggleItem }) => {
  return (
    <View style={[styles.item, data.picked && styles.selectedItem]} >
      <Text style={[styles.itemText, styles.qty]}>[ {data.qty} ]</Text>
      <Text style={[styles.itemText, styles.style]}>{data.style}</Text>
      <Text style={[styles.itemText, styles.boxSku]}>{data.boxSku}</Text>
      <Text style={[styles.itemText, styles.location]}>{data.location}</Text>
      <Icon
        name={data.picked ? 'check-box' : 'check-box-outline-blank'}
        style={styles.checkMark}
        type='MaterialIcon'
        onPress={() => toggleItem(data.id)}
      // disabled={data.picked}
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
    marginHorizontal: 8
  },
  selectedItem: {
    backgroundColor: '#a4a4a4'
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
    textAlign: 'right'
  },
  checkMark: {
    flex: 2,
    fontSize: 30,
    alignSelf: 'center',
    textAlign: 'right'
  }
});
