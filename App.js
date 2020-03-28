import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Login, Orders, PullDetails, Scheduler, UserManagement } from './screens/Index';


const Stack = createStackNavigator();
const HomeStackScreen = () =>
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#f4511e' },
      headerTitleAlign: 'center',
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' },
    }}
  >
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        title: 'NobleCraft\'s Warehouse App'
      }}
    />
    <Stack.Screen
      name="OrderStack"
      component={OrdersStackScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="UserStack"
      component={UserStackScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="SchedulerStack"
      component={SchedulerStackScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>


const OrdersStack = createStackNavigator();
const OrdersStackScreen = () =>
  <OrdersStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#f4511e' },
      headerTitleAlign: 'center',
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' },
      headerRightContainerStyle: { paddingHorizontal: 10 },
      headerRight: () => (
        <Image
          style={{ width: 36, height: 36, tintColor: '#fff' }}
          source={require('./assets/outline_home_black_36dp.png')}
        />
      )
    }}
  >
    <OrdersStack.Screen
      name='Orders'
      component={Orders}
      options={{ title: 'Current Orders' }}
    />
    <OrdersStack.Screen
      name='PullDetails'
      component={PullDetails}
      options={{ title: 'Pull Sheet' }}
    />
  </OrdersStack.Navigator>

const SchedulerStack = createStackNavigator();
const SchedulerStackScreen = () =>
  <SchedulerStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#f4511e' },
      headerTitleAlign: 'center',
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' },
      headerRightContainerStyle: { paddingHorizontal: 10 },
      headerRight: () => (
        <Image
          style={{ width: 36, height: 36, tintColor: '#fff' }}
          source={require('./assets/outline_home_black_36dp.png')}
        />
      )
    }}
  >
    <SchedulerStack.Screen
      name='Scheduler'
      component={Scheduler}
    />
  </SchedulerStack.Navigator>


const UserStack = createStackNavigator();
const UserStackScreen = () =>
  <UserStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#f4511e' },
      headerTitleAlign: 'center',
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' },
      headerRightContainerStyle: { paddingHorizontal: 10 },
      headerRight: () => (
        <Image
          style={{ width: 36, height: 36, tintColor: '#fff' }}
          source={require('./assets/outline_home_black_36dp.png')}
        />
      )
    }}
  >
    <UserStack.Screen
      name='UserManagement'
      component={UserManagement}
      options={{ title: 'User Management' }}
    />
    {/* <UserStack.Screen
      name='UserCreate'
      component={UserCreate}
      options={{title: 'Create User'}}
    />
    <UserStack.Screen
      name='UserModify'
      component={UserModify}
      options={{title: 'Modify User'}}
    /> */}
  </UserStack.Navigator>


const App = () => {
  return (
    <NavigationContainer style={styles.container}>
      <HomeStackScreen />
    </NavigationContainer>
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
