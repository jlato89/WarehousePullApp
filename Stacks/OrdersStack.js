import React from 'react';
import { Orders, PullDetails } from '../screens/Index';
import { createStackNavigator } from '@react-navigation/stack';
import HeaderHomeIcon from '../components/HeaderHomeIcon';

const Stack = createStackNavigator();
const OrdersStack = () =>
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#f4511e' },
      headerTitleAlign: 'center',
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' },
      headerRightContainerStyle: { paddingHorizontal: 10 },
      headerRight: () => <HeaderHomeIcon />
    }}
  >
    <Stack.Screen
      name='Orders'
      component={Orders}
      options={{ title: 'Current Orders' }}
    />
    <Stack.Screen
      name='PullDetails'
      component={PullDetails}
      options={{ title: 'Pull Sheet' }}
    />
  </Stack.Navigator>

export default OrdersStack