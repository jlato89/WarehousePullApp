import React from 'react';
import { Image } from 'react-native';
import { Orders, PullDetails } from '../screens/Index';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const OrdersStack = () =>
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#f4511e' },
      headerTitleAlign: 'center',
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' },
      headerRightContainerStyle: { paddingHorizontal: 10 },
      headerRight: () => (
        <Image
          style={{ width: 36, height: 36, tintColor: '#fff' }}
          source={require('../assets/outline_home_black_36dp.png')}
        />
      )
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