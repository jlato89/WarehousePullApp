import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  FlatList,
  Button,
  Alert,
} from 'react-native';
import { Icon } from 'react-native-elements';

const PullDetails = ({ navigation, route }) => {
  const { quote, customer, notes, data } = route.params;
  const isFinished = data.every(item => item.picked !== false);

  const toggleItemHandler = ({ index }) => {
    navigation.setParams((data[index].picked = !data[index].picked));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{quote}</Text>
        <Text style={styles.headerText}>{customer}</Text>
      </View>
      <View style={styles.listItems}>
        <FlatList
          data={data.sort((a, b) => a.picked - b.picked)}
          renderItem={({ item, index }) => (
            <ListViewItem
              data={item}
              index={index}
              toggleItem={toggleItemHandler}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={styles.comments}>
        <Text style={styles.commentsText}>
          {notes ? notes : 'There are currently no Notes'}
        </Text>
      </View>
      <Button
        style={styles.submitBtn}
        title='Submit'
        disabled={!isFinished}
        onPress={() => alert('Pullsheet marked as Pulled')}
      />
    </SafeAreaView>
  );
};

function ListViewItem({ data, index, toggleItem }) {
  return (
    <View style={[styles.item, data.picked && styles.selectedItem]}>
      <Text style={[styles.itemText, styles.qty]}>[ {data.qty} ]</Text>
      <Text style={[styles.itemText, styles.style]}>{data.style}</Text>
      <Text style={[styles.itemText, styles.sku]}>{data.sku}</Text>
      <Text style={[styles.itemText, styles.location]}>{data.location}</Text>
      <View style={styles.checkMark}>
        <Icon
          name={data.picked ? 'check-square-o' : 'square-o'}
          type='font-awesome'
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
}

export default PullDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  headerText: {
    fontSize: 16,
  },
  listItems: {
    flex: 15,
  },
  item: {
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
    fontWeight: 'bold',
  },
  style: {
    flex: 1,
    textAlign: 'right',
  },
  sku: {
    flex: 3,
    textAlign: 'right',
  },
  location: {
    flex: 2,
    textAlign: 'right',
  },
  checkMark: {
    flex: 1,
    fontSize: 30,
    alignItems: 'flex-end',
  },
  comments: {
    flex: 1,
    paddingHorizontal: 5,
  },
  commentsText: {
    fontSize: 16,
  },
  submitBtn: {
    flex: 1,
  },
});
