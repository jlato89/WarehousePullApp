import React from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { Icon } from 'react-native-elements';

const ListViewItem = ({ data, index, toggleItem }) => {
  return (
    <View style={[styles.wrapper, data.picked && styles.selectedItem]}>
      <Text style={[styles.itemText, styles.qty]}>{data.qty}</Text>
      <Text style={[styles.itemText, styles.sku]}>{data.sku}</Text>
      <Text style={[styles.itemText, styles.location]}>
        {data.location || (
          <Text style={{ fontSize: 16, color: 'red' }}>Location Error</Text>
        )}
      </Text>
      <View style={styles.checkMark}>
        <Icon
          name={data.picked ? 'check-square-o' : 'square-o'}
          type='font-awesome'
          size={40}
          onPress={() =>
            !data.picked
              ? toggleItem({ index })
              : Alert.alert(`Mark ${data.sku} as un-pulled`, 'are you sure?', [
                  { text: 'YES', onPress: () => toggleItem({ index }) },
                  { text: 'NO', style: 'cancel' },
                ])
          }
        />
      </View>
    </View>
  );
};

export default ListViewItem;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 3,
    // marginHorizontal: 8
  },
  selectedItem: {
    backgroundColor: '#a4a4a4',
  },
  itemText: {
    fontSize: 20,
  },
  qty: {
    flex: 1,
    fontSize: 28,
    fontWeight: 'bold',
  },
  style: {
    flex: 1,
    textAlign: 'right',
  },
  sku: {
    flex: 3,
  },
  location: {
    flex: 2,
  },
  checkMark: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
