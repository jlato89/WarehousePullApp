import React from 'react';
import { StyleSheet, SafeAreaView, View, FlatList, Button } from 'react-native';

import ListItem from '../components/PullDetails/ListItem';
import PullInfo from '../components/PullDetails/PullInfo';
import PullComments from '../components/PullDetails/PullComments';

const PullDetails = ({ navigation, route }) => {
  const { quote, customer, notes, data, date } = route.params;
  const isFinished = data.every(item => item.picked !== false);

  const toggleItemHandler = ({ index }) => {
    navigation.setParams((data[index].picked = !data[index].picked));
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <PullInfo quote={quote} customer={customer} date={date} />
      {/* MAIN */}
      <View style={styles.listItems}>
        <FlatList
          data={data.sort((a, b) => a.picked - b.picked)}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <ListItem
              data={item}
              index={index}
              toggleItem={toggleItemHandler}
            />
          )}
        />
      </View>
      {/* FOOTER */}
      <PullComments notes={notes} />
      <Button
        style={styles.submitBtn}
        title='Submit'
        disabled={!isFinished}
        onPress={() => alert('Pullsheet marked as Pulled')}
      />
    </SafeAreaView>
  );
};

export default PullDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItems: {
    flex: 15,
  },
  submitBtn: {
    flex: 1,
  },
});
