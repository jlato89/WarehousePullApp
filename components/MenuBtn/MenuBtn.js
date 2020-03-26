import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';

const MenuBtn = ({ navigation, name, route, imgUrl }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={() => navigation.navigate(route)}>
      <View>
        <Image style={styles.btnImg} source={imgUrl} />
        <Text style={styles.btnText}>{name}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default MenuBtn

const styles = StyleSheet.create({
  btnContainer: {
    flexBasis: '40%',
    margin: 15,
    // borderWidth: 2 //! Used for testing
  },
  btnImg: {
    alignSelf: 'center',
    height: 100,
    width: 128,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  }
})