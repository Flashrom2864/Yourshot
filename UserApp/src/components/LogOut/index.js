import React from "react";
import { View, Text, Pressable } from "react-native";
import {useNavigation} from '@react-navigation/native'

import styles from './styles.js';

const LogOut = (props) => {
    const navigation = useNavigation();

  const goToHome = () => {
    navigation.navigate('Home')
  }
  return(
      <Pressable onPress={goToHome} style={styles.box}>
          <Text>Logout</Text>
      </Pressable>
  )
};

export default LogOut;