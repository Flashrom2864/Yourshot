import React from "react";
import { ScrollView, View, Dimensions } from "react-native";

import HomeMap from '../../components/HomeMap';
import CovidMessage from '../../components/CovidMessage';
import HomeSearch from '../../components/HomeSearch';
import LogOut from '../../components/LogOut';

const HomeScreen = (props) => {
  return (
    <ScrollView>
      <LogOut />
      <View style={{height: Dimensions.get('window').height - 400}}>
        <HomeMap />
      </View>

      {/*  Covid Message*/}
      <CovidMessage />

      {/*  Bottom Comp*/}
      <HomeSearch />
    </ScrollView>
  );
};

export default HomeScreen;
