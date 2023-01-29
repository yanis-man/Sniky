import React from "react";
import { StyleSheet, Text, View, FlatList, Dimensions, ScrollView } from 'react-native';

import BaseScreen from '../components/base_screen'

import {ShoesCardHistory} from '../components/shoes_card'

export default HistoryScreen = (props, {navigation, route}) => {
    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          name: 'Puma RSX3',
          size:45,
          price:1100,
          number:10,
          boughtAt:"20-05-2022",
          isSold:false
        },
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bc',
          name: 'Puma RSX3',
          size:45,
          price:1100,
          number:10,
          boughtAt:"20-05-2022",
          isSold:false
        },
        {
          id: 'bd7acbea-c1b1-462-aed5-3ad53abb28a',
          name: 'Puma RSX3',
          size:45,
          price:1100,
          number:10,
          boughtAt:"20-05-2022",
          isSold:false
        },
      ];
    const INFOS = [
        {
            value:"38",
            label:'paires vendues'
        },
        {
            value:'€4.5k',
            label:'de bénéfices'
        }
    ]
    const renderItem = ({item}) => {
        return(
        <ShoesCardHistory item={item}></ShoesCardHistory>)
    }
    return(
        <View style={styles.mainContainer}>
            <BaseScreen colors={['#2258E8', '#82A7FF']} label="Historique" infos={INFOS}>
            </BaseScreen>
            <View style={styles.list}>
                <FlatList
                style={{backgroundColor:'#F9F9F9'}}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                />
            </View>
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
        backgroundColor:'#F9F9F9',
        paddingLeft:5,
        zIndex:2,
        marginTop:45,
        marginLeft:screenWidth * 0.022,

    }
})