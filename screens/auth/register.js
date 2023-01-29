import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import {View, StyleSheet} from 'react-native';

import InputsPage from "./register_pages/inputs_pages";
import CardDetailsPage from "./register_pages/card_page";

export default function RegisterScreen({navigation: {navigate}}) {

    const StackNav = createStackNavigator()
    return (
      <View style={styles.main}>
        <StackNav.Navigator screenOptions={{headerShown:false}}>
            <StackNav.Screen name="Inputs" component={InputsPage}/>
            <StackNav.Screen name="Card" component={CardDetailsPage}/>
        </StackNav.Navigator>
      </View>
    );
  }

const styles = StyleSheet.create({
  main:{
    width:'90%',
    height:'100%',
    alignSelf:'center',
    justifyContent:'center',
  },
  userField:{
    marginBottom:'4%'
  },
  passField:{
    marginBottom:'4%'
  },
  signInButton:{
    backgroundColor:'black'
  }
})