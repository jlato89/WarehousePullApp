import React from 'react';
import { Image } from 'react-native';
import { Scheduler } from '../screens/Index';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const SchedulerStack = () =>
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
      name='Scheduler'
      component={Scheduler}
    />
  </Stack.Navigator>

export default SchedulerStack