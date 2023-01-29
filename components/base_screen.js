import React, { useState } from "react";
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import {BoxShadow} from 'react-native-shadow'

import ShoesAddModal from "./adding_modal";

export default function BaseScreen(props){
    const colors = props.colors
    const screenLabel = props.label
    const infosContent = props.infos
    const showInfosCard = (infosContent == null ? 0 : 1)
    const [isModalOpened, setOpened] = useState(false)

    const toggleModal = () => setOpened(!isModalOpened)

    return(
        <View style={styles.global}>
            <View>
                <LinearGradient
                colors={[colors[0], colors[1]]}
                style={styles.gradient}
                >
                <View style={styles.titleAndActions}>
                    <TouchableOpacity><Text style={styles.menuButton}>+</Text></TouchableOpacity>
                    <Text style={styles.title}>{screenLabel}</Text>
                    <TouchableOpacity onPress={toggleModal}><Text style={styles.addButton}>+</Text></TouchableOpacity>
                </View>
                </LinearGradient>
            </View>
            <ShoesAddModal visible={isModalOpened} close={toggleModal}/>
            {showInfosCard == 1 && <View style={styles.infoContainer}>
                    { infosContent.map((infos) => {
                       return(
                        <View style={styles.infoBox} key={infos.id}>
                            <Text style={styles.infoText}>{infos.value}</Text>
                            <Text style={styles.labelText}>{infos.label}</Text>
                        </View>
                       )
                    })}
            </View>}
        </View>
    )
}
const screenWidth = Dimensions.get('screen').width
const screenHeight = Dimensions.get('screen').height
const styles = StyleSheet.create({
    global:{
        zIndex:1,
        backgroundColor:'#F9F9F9',
    },
    gradient:{
        height:screenHeight * 0.23,
        zIndex:1,
    },
    titleAndActions:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'center',
        marginTop:60,
        marginLeft:20,
        marginRight:20
    },
    title:{
        fontFamily:'Montserrat_bold',
        color:'white',
        fontSize:27,
        marginTop:10,
    },
    addButton:{
        fontFamily:'Montserrat',
        color:'white',
        fontSize:45
    },
    menuButton:{
        fontFamily:'Montserrat',
        color:'white',
        fontSize:45,
        opacity:0
    },
    infoContainer:{
        zIndex:1,
        elevation:11,
        borderRadius:5,
        backgroundColor:"white",
        height:screenHeight * 0.1,
        width:screenWidth *0.95,
        flexDirection:'row',
        marginTop:-60,
        marginLeft:screenWidth *0.022,
        justifyContent:'space-around',
        alignItems:'center'
    },
    infoBox:{
        marginTop:11
    },
    infoText:{
        textAlign:'center',
        fontFamily:'Montserrat_semi_bold',
        fontSize:26
    },
    labelText:{
        textAlign:'center',
        fontFamily:'Montserrat',
        color:'#8E8E8E',
        fontSize:16,
        marginTop:4
    }
})