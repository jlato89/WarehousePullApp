import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import MenuBtn from '../components/MenuBtn/MenuBtn';
import testImg from '../assets/note-128x128.png';

const MenuBtns = [
  {
    name: 'Current Orders',
    route: 'OrderStack',
    imgUrl: testImg
  },
  {
    name: 'Scheduler',
    route: 'SchedulerStack',
    imgUrl: testImg
  },
  {
    name: 'User Management',
    route: 'UserStack',
    imgUrl: testImg
  },
]

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {MenuBtns.map((btn, i) => (
        // <MenuBtn
        //   key={i}
        //   name={btn.name}
        //   // route={btn.route}
        //   imgUrl={btn.imgUrl}
        //   navigation={navigation}
        // />
        <TouchableOpacity
          key={i}
          style={styles.btnContainer}
          onPress={() => navigation.navigate(btn.route, btn)
          }>
          <View>
            <Image style={styles.btnImg} source={btn.imgUrl} />
            <Text style={styles.btnText}>{btn.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
      {/* <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => navigation.navigate('OrderStack')}
      >
        <View>
          <Image style={styles.btnImg} source={testImg} />
          <Text style={styles.btnText}>Current Orders</Text>
        </View>
      </TouchableOpacity> */}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10
  },
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
