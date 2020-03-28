import React from 'react';
import { Image } from 'react-native';
import { UserManagement } from '../screens/Index';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const UserStack = () =>
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
  </Stack.Navigator>

export default UserStack