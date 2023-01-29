import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import InventorySubScreen from '../../screens/inventory_sub_screen'

function Comp(){
  return(
    <View>
      <Text>comp</Text>
    </View>
  )
}

const Tab = createMaterialTopTabNavigator();

export function InventoryNav(props) {
  const data = props.item
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
			tabBarLabel: ({ tintColor, focused, item }) => {
        return <Text style={focused ? styles.itemFocused : styles.label}>{route.name}</Text>
			},
      tabBarStyle:styles.global,
      tabBarIndicatorStyle:styles.indicator,
      swipeEnabled:true,
			
		})}
    >
      <Tab.Screen name="Possédées" component={InventorySubScreen} initialParams={{category:'possessed'}} />
      <Tab.Screen name="Arrivages" component={InventorySubScreen} initialParams={{category:'arrives'}} />
      <Tab.Screen name="Expédiées" component={InventorySubScreen} initialParams={{category:'shipped'}}/>
    </Tab.Navigator>
  );
}


const styles = StyleSheet.create({
  label:{
    color:'#7A7A7A',
    fontFamily:'Montserrat_light'
  },
  item:{
  },  
  global:{
    zIndex:10,
    elevation:0, 
    alignSelf:'center',
    shadowOpacity:0, 
    backgroundColor:'tranparent', 
    width:'80%',
    height:40
  },
  container:{
  },
  indicator:{
    alignSelf:'center',
    backgroundColor:'transparent',
    borderColor:'#F84AF1',
    borderBottomWidth:.5
  },
  itemFocused:{
  fontFamily:'Montserrat_light',
    color:"#F84AF1"
  }
})