import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const PullInfo = ({ quote, customer }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.topHeader}>
        <Text style={styles.headerText}>#{quote}</Text>
        <Text style={styles.headerText}>Date and Time</Text>
      </View>
      <View style={styles.bottomHeader}>
        <Text style={styles.custName}>{customer}</Text>
        <Text style={styles.pullType}>Pull Type</Text>
        <Text style={styles.percent}>Percent</Text>
      </View>
    </View>
  );
};

export default PullInfo;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1.2,
    paddingHorizontal: 10,
    backgroundColor: '#b7b7b7',
  },
  topHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  custName: {
    flex: 2,
    textAlign: 'center',
  },
  pullType: {
    flex: 1,
    textAlign: 'right',
  },
  percent: {
    flex: 1,
    textAlign: 'right',
  },
});
