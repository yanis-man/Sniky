import React from "react";
import { StyleSheet, View, Dimensions } from 'react-native';

import BaseScreen from '../components/base_screen'
import { InventoryNav } from "../components/navigator/inventory_navigator";

export default InventoryScreen = (props) => {

    const INFOS = [
        {
            id:1,
            value:"38",
            label:'paires en stocks'
        },
        {
            id:2,
            value:'€4.5k',
            label:'de capital'
        }
    ]
    return(
        <View style={styles.mainContainer}>
            <BaseScreen colors={['#7C48C2', '#BA66D4', 'rgba(0,0,0,0)']} label="Inventaire" infos={INFOS} isHistory={false}/>
            <InventoryNav />
        </View>
    )
}
const screenWidth = Dimensions.get('screen').width
const screenHeight = Dimensions.get('screen').height
const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:'#F9F9F9',
        height:screenHeight,
    },
    list:{
        paddingLeft:5,
        zIndex:2,
        marginTop:45,
        marginLeft:screenWidth * 0.022,

    }
})