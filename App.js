import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';
import Home from './screens/Home';
import Login from './screens/Login';
import PullDetails from './screens/PullDetails';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="PullDetails" component={PullDetails} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <PullDetails />
    // </View>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight
  }
});
