import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Login from './screens/Login';
import PullList from './screens/PullList';
import PullDetails from './screens/PullDetails';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="PullList" component={PullList} />
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
    marginTop: 20 // Statusbar Height
  }
});
