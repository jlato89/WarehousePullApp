import React, { Component } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import TESTDATA from '../../TestData/testData.json';
import TestPendingOrders from '../../TestData/pendingOrders.example.json';
import CurrentOrders from '../components/Orders/CurrentOrders';
import PendingOrders from '../components/Orders/PendingOrders';

export class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderList: [],
      loading: false,
      isRefreshing: false,
      error: '',
    };
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

  // fetchOrders() {
  //   this.setState({ loading: true });
  //   fetch('http://192.168.1.136:8080/api/fetchOrders')
  //     .then(response => response.json())
  //     .then(latestOrders => setOrderList(latestOrders))
  //     .catch(err => console.log(err))
  //     .finally(() => setIsLoading(false));
  // }

  onRefresh() {
    this.setState({ isRefreshing: true });
    let orderList = TESTDATA;
    this.setState({ isRefreshing: false, orderList });
  }

  pullStatus(items) {
    let status = items.every(item => item.picked !== true);
    return status;
  }

  render() {
    const { loading, orderList } = this.state;
    const { navigation } = this.props;

    return loading ? (
      <ActivityIndicator size='large' />
    ) : (
      <SafeAreaView style={styles.container}>
        <View style={styles.alignTop}>
          <FlatList
            data={orderList}
            keyExtractor={item => item.id.toString()}
            extraData={this.state}
            refreshing={this.state.isRefreshing}
            onRefresh={this.onRefresh.bind(this)}
            renderItem={({ item }) => (
              <CurrentOrders
                item={item}
                navigation={navigation}
                pullStatus={this.pullStatus}
              />
            )}
          />
        </View>
        <View style={styles.alignBottom}>
          <FlatList
            data={TestPendingOrders}
            keyExtractor={item => item.id.toString()}
            extraData={this.state}
            refreshing={this.state.isRefreshing}
            onRefresh={this.onRefresh.bind(this)}
            renderItem={({ item, index }) => (
              <PendingOrders
                item={item}
                index={index}
                navigation={navigation}
              />
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default Orders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
  alignTop: {
    flex: 3,
  },
  alignBottom: {
    flex: 2,
    alignContent: 'flex-end',
  },
});
