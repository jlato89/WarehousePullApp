import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

const PendingOrders = ({ item, index, navigation }) => {
  const { name, qty } = item;
  const color = ['teal', 'blue', 'purple', 'yellow', 'red'];
  return (
    <TouchableOpacity style={styles.wrapper}>
      <Text style={{ width: 20, backgroundColor: color[index] }} />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.qty}>{qty}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PendingOrders;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    borderWidth: 1,
    marginVertical: 2,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  name: {
    flex: 4,
    fontSize: 18,
  },
  qty: {
    flex: 1,
    fontSize: 20,
    textAlign: 'right',
  },
});
