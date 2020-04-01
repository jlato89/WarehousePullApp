import React from 'react';
import { StyleSheet, TouchableOpacity, SafeAreaView, Text } from 'react-native';
import { Icon } from 'react-native-elements';

const options = [
  {
    name: 'Current Orders',
    iconName: 'assignment',
    route: 'OrderStack',
    privLv: 2
  },
  {
    name: 'Scheduler',
    iconName: 'date-range',
    route: 'SchedulerStack',
    privLv: 2
  },
  {
    name: 'User Management',
    iconName: 'supervisor-account',
    route: 'UserStack',
    privLv: 1
  },
]

const Home = ({ navigation }) => {
  const privLv = 1;    //* (1)ADMIN, (2)SUPERVISOR, (3)EMPLOYEE, ect

  return (
    <SafeAreaView style={styles.container}>
      {options.filter(btn => btn.privLv >= privLv)
        .map((btn, i) => (
          <TouchableOpacity
            key={i}
            style={styles.menuBtnWrapper}
            onPress={() => navigation.navigate(btn.route, btn)}
          >
            <Icon style={styles.menuBtnImg} name={btn.iconName} type='material' size={80} />
            <Text style={styles.menuBtnText}>{btn.name}</Text>
          </TouchableOpacity>
        ))}
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10
  },
  menuBtnWrapper: {
    flexBasis: '40%',
    margin: 15
  },
  menuBtnImg: {
    alignSelf: 'center'
  },
  menuBtnText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  }

})
