import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const CurrentOrders = ({ navigation, item, pullStatus }) => {
  const { id, quote, date, data, customerInfo } = item;
  const customer = customerInfo.first_name + ' ' + customerInfo.last_name;

  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={() =>
        navigation.navigate('PullDetails', { id, quote, customer, date, data })
      }
    >
      <View style={styles.topContent}>
        <Text style={styles.listText}>#{quote}</Text>
        <Text style={styles.listText}>{date}</Text>
      </View>
      <View style={styles.bottomContent}>
        <Text style={styles.listText} numberOfLines={1}>
          {customer}
        </Text>
        <Text style={styles.listText}>
          {pullStatus(data) ? 'Not Started' : 'Started'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CurrentOrders;

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 2,
    marginVertical: 3,
  },
  topContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  listText: {
    marginHorizontal: 5,
    fontSize: 18,
    maxWidth: '60%',
  },
});
