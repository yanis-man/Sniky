import React, { useState } from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'

import GlobalStyle from '../../assets/styles/main_style'
import GradientButton from "../../components/gradient_button";

export default function ActionScreen({route}){
    const data = route.params
    const [isButtonToggled, setToggled] = useState(true)
    const [inputedText, setText] = useState("")
    
    const toggleButton = () => {
        setToggled(!isButtonToggled)
    }

    const checkInput = (newText) => {
        if (!isNaN(newText)){
            setText(newText)
        }
    }
    return(
        <View style={styles.container}>
            <View>

                {isButtonToggled ?
                (<View>
                    <GradientButton colors={['#51BA61', '#4EF034']} onPress={toggleButton} label="Vendue" />
                    <GradientButton colors={['#6C2AD8', '#ED7BFF']} onPress={toggleButton} label="Lier un code barre" />
                    <GradientButton colors={['#2A46D8', '#7BD7FF']} onPress={toggleButton} label="Archiver" />

                </View>)
            :
                (
                    <View style={styles.sellContainer}>
                        <Text style={[GlobalStyle.text, styles.text]}>Vendue pour : </Text>
                        <TextInput placeholder="Montant" style={[GlobalStyle.text_input, {alignSelf:'center'}]} keyboardType="decimal-pad" onChangeText={checkInput}/>
                        <GradientButton colors={['#51BA61', '#4EF034']} onPress={toggleButton} label="Confirmer" style={GlobalStyle.confirmButton}/>
                        <TouchableOpacity onPress={setToggled}>
                            <Text style={styles.sellBackButton}>Retour</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
            <TouchableOpacity style={styles.deleteContainer}><Text style={styles.delete}>Supprimer</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"100%",
        alignItems:'center',
        justifyContent:'space-around',
    },
    deleteContainer:{
        padding:5,
        alignSelf:'flex-end'
    },
    sellContainer:{
        justifyContent:'center'
    },
    delete:{
        color:'red'
    },
    sellBackButton:{
        alignSelf:'center',
        marginTop:5,
        color:"#7d7D7D"
    },
    text:{
        fontSize:14,
        marginBottom:10
    },
})