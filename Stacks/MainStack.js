import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import { OrdersStack, SchedulerStack, UserStack } from './Index';

const Stack = createStackNavigator();
const MainStack = () =>
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
      component={OrdersStack}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="UserStack"
      component={UserStack}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="SchedulerStack"
      component={SchedulerStack}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>

export default MainStack