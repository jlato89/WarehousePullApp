import React from 'react';
import { Scheduler } from '../screens/Index';
import { createStackNavigator } from '@react-navigation/stack';
import HeaderHomeIcon from '../components/HeaderHomeIcon';

const Stack = createStackNavigator();
const SchedulerStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#f4511e' },
      headerTitleAlign: 'center',
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' },
      headerRightContainerStyle: { paddingHorizontal: 10 },
      headerRight: () => <HeaderHomeIcon />,
    }}
  >
    <Stack.Screen name='Scheduler' component={Scheduler} />
  </Stack.Navigator>
);

export default SchedulerStack;
