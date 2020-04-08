import React from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { Icon } from 'react-native-elements';

const ListViewItem = ({ data, toggleItem }) => {
  return (
    <View style={[styles.item, data.picked && styles.selectedItem]} >
      <Text style={[styles.itemText, styles.qty]}>[ {data.qty} ]</Text>
      <Text style={[styles.itemText, styles.style]}>{data.style}</Text>
      <Text style={[styles.itemText, styles.boxSku]}>{data.sku}</Text>
      <Text style={[styles.itemText, styles.location]}>{data.location}</Text>
      <View style={styles.checkMark}>
        <Icon
          name={data.picked ? 'check-square-o' : 'square-o'}
          type='font-awesome'
          onPress={() => !data.picked ? toggleItem(data.id) : Alert.alert(
            `Mark ${data.boxSku} as un-pulled`,
            'are you sure?',
            [
              { text: 'YES', onPress: () => toggleItem(data.id) },
              { text: 'NO', style: 'cancel' }
            ])
          }
        />
      </View>
    </View>
  )
}

export default ListViewItem

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 3,
    // marginHorizontal: 8
  },
  selectedItem: {
    backgroundColor: '#a4a4a4'
  },
  itemText: {
    fontSize: 20
  },
  qty: {
    flex: 1,
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
    flex: 1,
    fontSize: 30,
    alignItems: 'flex-end'
  }
});
