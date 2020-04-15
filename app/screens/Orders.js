import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, FlatList, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import TESTDATA from '../../TestData/testData.json';

export class Orders extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orderList: [],
      loading: false,
      isRefreshing: false,
      error: ''
    }
  }

  componentDidMount() {
    if (this.state.orderList.length === 0) {
      console.log('Fetch Triggered');
      this.fetchOrders();
    }
  }

  fetchOrders() {
    this.setState({ loading: true });
    let currentOrders = this.state.orderList;
    let orderList = currentOrders.concat(TESTDATA); // concate/stack list with response
    this.setState({ loading: false, orderList });
  }

  onRefresh() {
    this.setState({ isRefreshing: true });
    let orderList = TESTDATA;
    this.setState({ isRefreshing: false, orderList });
  }

  render() {
    const { loading, orderList } = this.state;
    const { navigation } = this.props;
    console.log(orderList);

    return (
      <SafeAreaView style={styles.container}>
        {loading ?
          <ActivityIndicator size='large' />
          :
          <FlatList
            data={orderList}
            renderItem={({ item }) =>
              <ListItem
                item={item}
                navigation={navigation}
              />}
            keyExtractor={item => item.id.toString()}
            extraData={this.state}
            refreshing={this.state.isRefreshing}
            onRefresh={this.onRefresh.bind(this)}
          />
        }
      </SafeAreaView>)
  }
}

//* Render Items
function ListItem({ navigation, item }) {
  const { id, quote, date, data, customerInfo } = item;
  const customer = customerInfo.first_name + ' ' + customerInfo.last_name;

  return (
    <TouchableOpacity
      style={styles.listContainer}
      onPress={() => navigation.navigate('PullDetails', { id, quote, customer, data })}
    >
      <View style={styles.listHeader}>
        <Text style={styles.listText}>{quote}</Text>
        <Text style={styles.listText}>{date}</Text>
      </View>
      <View style={styles.listContent}>
        <Text style={styles.listText} numberOfLines={1}>{customer}</Text>
        <Text style={styles.listText}>{pullStatus(data) ? 'Not Started' : 'Started'}</Text>
      </View>
    </TouchableOpacity>
  )
}


function pullStatus(items) {
  let status = items.every(item => item.picked !== true)
  return status
}

// function fetchOrders() {
//   this.setState({ loading: true })
//   fetch('http://192.168.1.136:8080/api/fetchOrders')
//     .then(response => response.json())
//     .then(latestOrders => setOrderList(latestOrders))
//     .catch(err => console.log(err))
//     .finally(() => setIsLoading(false))
// }

export default Orders

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5
  },
  listContainer: {
    borderWidth: 2,
    marginVertical: 5
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  listContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20

  },
  listText: {
    marginHorizontal: 5,
    fontSize: 18,
    maxWidth: '60%'
  }
});
