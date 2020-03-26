import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MenuBtn from '../components/MenuBtn/MenuBtn';
import testImg from '../assets/note-128x128.png';

const MenuBtns = [
  {
    name: 'Pull List',
    route: 'PullList',
    imgUrl: testImg
  },
  {
    name: 'Scheduler',
    route: 'PullList',
    imgUrl: testImg
  },
  {
    name: 'PullDetails Test',
    route: 'PullDetails',
    imgUrl: testImg
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
