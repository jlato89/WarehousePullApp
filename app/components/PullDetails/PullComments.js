import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PullComments = ({ notes }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.commentsText}>
        {notes ? notes : 'There are currently no Notes'}
      </Text>
    </View>
  );
};

export default PullComments;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 5,
  },
  commentsText: {
    fontSize: 16,
    color: 'red',
  },
});
