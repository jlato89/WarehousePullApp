import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './app/Stacks/MainStack';


const App = () => {
  return (
    <NavigationContainer style={styles.container}>
      <MainStack />
    </NavigationContainer>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // marginTop: 20 // Statusbar Height
  }
});
