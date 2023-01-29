import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';


import InfoScreen from '../../screens/inventory_modal/info_screen';
import ActionScreen from '../../screens/inventory_modal/actions_screen';

function Comp(){
  return(
    <View>
      <Text>comp</Text>
    </View>
  )
}

const Tab = createMaterialTopTabNavigator();

export function ModalNav(props) {
  const data = props.item
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
			tabBarLabel: ({ tintColor, focused, item }) => {
        return <Text style={focused ? styles.itemFocused : styles.label}>{route.name}</Text>
			},
      tabBarStyle:styles.global,
      tabBarIndicatorStyle:styles.indicator,
      swipeEnabled:true
			
		})}
    >
      <Tab.Screen name="Informations" component={InfoScreen} initialParams={data} />
      <Tab.Screen name="Actions" component={ActionScreen} initialParams={data} />
      <Tab.Screen name="Modifier" component={Comp} />
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
    elevation:0, 
    alignSelf:'center',
    shadowOpacity:0, 
    backgroundColor:'tranparent', 
    width:'95%',
    height:40
  },
  container:{
  },
  indicator:{
    alignSelf:'center',
    backgroundColor:'transparent',
    borderBottomWidth:.5
  },
  itemFocused:{
    fontFamily:'Montserrat_light',
    color:"#0C0E12"
  }
})