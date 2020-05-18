import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const PullInfo = ({ quote, customer }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.headerText}>{quote}</Text>
      <Text style={styles.headerText}>{customer}</Text>
    </View>
  );
};

export default PullInfo;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#bdb7b7',
  },
  headerText: {
    fontSize: 16,
  },
});
