import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MenuBtn from '../components/MenuBtn/MenuBtn';

const MenuBtns = [
  {
    name: 'Pull List',
    route: 'PullList',
    imgUrl: 'http://simpleicon.com/wp-content/uploads/note-128x128.png'
  },
  {
    name: 'Scheduler',
    route: 'PullList',
    imgUrl: 'http://simpleicon.com/wp-content/uploads/note-128x128.png'
  },
  {
    name: 'Other Option',
    route: 'PullList',
    imgUrl: 'http://simpleicon.com/wp-content/uploads/note-128x128.png'
  },
]

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {MenuBtns.map((btn, i) => (
        <MenuBtn
          key={i}
          name={btn.name}
          route={btn.route}
          imgUrl={btn.imgUrl}
          navigation={navigation}
        />
      ))}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10
  }
})
