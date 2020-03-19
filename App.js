import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PullDetails from './screens/PullDetails/PullDetails';

export default function App() {
  return (
    <View style={styles.container}>
      <PullDetails />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
