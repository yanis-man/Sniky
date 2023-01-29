import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";


export default function GradientButton(props){
    return(
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
            <LinearGradient colors={[...props.colors]} start={{x:1, y:0}} style={[props.style, {width:"100%", height:'100%', borderRadius:6, alignItems:'center', justifyContent:'center'}]}>
            <Text style={styles.text}>{props.label}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        padding:5,
        width:350,
        height:50,
    },
    text:{
        color:'white',
        fontSize:18,
        fontFamily:'Montserrat_semi_bold',
    },
})