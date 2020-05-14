import React from 'react';
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
} from 'react-native';
import { Icon } from 'react-native-elements';
import menuItems from '../config/menuItems';
import GridFormat from '../components/gridFormat';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={numColumns}
        data={GridFormat(menuItems, numColumns)}
        renderItem={({ item }) => (
          <RenderItem item={item} navigation={navigation} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Home;

//* Rendered Item
function RenderItem({ item, navigation }) {
  let { itemStyle, itemText, itemInvisible } = styles;
  if (item.empty) {
    return <View style={[itemStyle, itemInvisible]} />;
  }
  return (
    <TouchableOpacity
      style={itemStyle}
      onPress={() => navigation.navigate(item.route, item)}
    >
      <Icon name={item.iconName} type='material' size={80} />
      <Text style={itemText}>{item.name}</Text>
    </TouchableOpacity>
  );
}

const numColumns = 2;
const WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemStyle: {
    flex: 1,
    // backgroundColor: '#3232ff',
    height: WIDTH / numColumns,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 1,
  },
  itemText: {
    // color: '#fff',
    fontSize: 18,
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
});
