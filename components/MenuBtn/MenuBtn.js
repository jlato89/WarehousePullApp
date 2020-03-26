import React from 'react'
import { StyleSheet, TouchableHighlight, Image } from 'react-native'

const MenuBtn = ({ navigation }) => {
  return (
    <TouchableHighlight style={styles.container} onPress={() => navigation.navigate('PullList')}>
      <Image
        style={styles.container}
        source={{
          uri: 'https://cdn0.iconfinder.com/data/icons/vector-huge-black-icons/16/order_form-512.png',
        }}
      />
    </TouchableHighlight>
  )
}

export default MenuBtn

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 150,
    marginVertical: 10
  },
})
