import React from "react";
import { StyleSheet, View, FlatList, Dimensions, } from 'react-native';

import {ShoesCardInventory} from '../components/shoes_card'

export default InventorySubScreen = ({navigation, route}) => {
    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          name: 'Puma RSX3',
          size:45,
          price:123,
          number:10,
          boughtAt:"20-05-2022",
          isSold:false
        },
        {
          id: 'bd7acbea-1b1-46c2-aed5-3ad53abb28ba',
          name: 'AJ1',
          size:45,
          price:1100,
          number:10,
          boughtAt:"20-05-2022",
          isSold:false
        },
      ];
    const renderItem = ({item}) => {
        return(
        <ShoesCardInventory item={item}></ShoesCardInventory>)
    }
    return(
            <View style={styles.mainContainer}>
                <FlatList
                style={{backgroundColor:'#F9F9F9'}}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                />
            </View>
    )
}
const screenWidth = Dimensions.get('screen').width
const screenHeight = Dimensions.get('screen').height
const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:'#F9F9F9',
        height:screenHeight,
        marginTop:screenHeight*0.02,
        alignSelf:'center'
    },
})