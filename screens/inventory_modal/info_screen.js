import React from "react";
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native'

export default function InfoScreen({route}){
    const data = route.params
    return(
    <View style={styles.global}>
        <View style={styles.noteContainer}>
            <Text style={[styles.infoLabel, styles.noteLabel]}>Note:</Text>
            <ScrollView style={styles.infoTextContainer}>
                <Text style={styles.infoText}>codecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecode</Text>
            </ScrollView>
        </View>
        <View style={styles.upperText}>
            <View style={styles.upperTextItem}>
                <Text style={styles.infoLabel}>Date d'achat : </Text>
                <Text style={styles.infoText}>{data.boughtAt}</Text>
            </View>
            <View style={styles.upperTextItem}>
                <Text style={styles.infoLabel}>Date d'achat : </Text>
                <Text style={styles.infoText}>{data.boughtAt}</Text>
            </View>
        </View>
    </View>)
}
const screenHeight = Dimensions.get('screen').height
const styles = StyleSheet.create({
    global:{
        backgroundColor:'white',
        elevation:5,
        width:"95%",
        height:"90%",
        alignSelf:'center',
        borderRadius:5,
        marginTop:20,
        padding:17,
        justifyContent:'space-around'
    },
    upperText:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    upperTextItem:{
        flexDirection:'column',
        alignItems:'center'
    },
    noteContainer:{
        marginBottom:25,
    },
    infoLabel:{
        fontFamily:'Montserrat_semi_bold',
        fontSize:15,
        color:'#474747'
    },
    infoTextContainer:{
        maxHeight:screenHeight * 0.1,
    },
    infoText:{
        fontFamily:"Montserrat",
        fontSize:15,
        
        color:'#474747'
    },
    noteLabel:{
        marginBottom:10
    }
})