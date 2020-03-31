import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HeaderHomeIcon = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Image
        style={{ width: 36, height: 36, tintColor: '#fff' }}
        source={require('../assets/outline_home_black_36dp.png')}
      />
    </TouchableOpacity>
  )
}

export default HeaderHomeIcon
