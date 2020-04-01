import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

const HeaderHomeIcon = () => {
  const navigation = useNavigation();
  return (
    <Icon
      name='home'
      type='material'
      color='#fff'
      size={36}
      onPress={() => navigation.navigate('Home')}
    />
  )
}

export default HeaderHomeIcon
