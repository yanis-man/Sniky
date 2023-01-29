import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Dimensions, TextInput} from "react-native";
import ReactNativeModal from "react-native-modal";
import { SafeAreaView } from "react-native-safe-area-context";

import GlobalStyle from "../../assets/styles/main_style";

export default function InputsModal(props){

    const [shoeName, setShoeName] = useState("")
    

    return(
        <ReactNativeModal isVisible={props.visible} style={GlobalStyle.bottomModalView} onBackdropPress={props.close}>
            <SafeAreaView style={styles.innerModal}>
                <TextInput />
            <TouchableOpacity onPress={props.close} style={{backgroundColor:'transparent'}}>
                <Text>Annuler</Text>
            </TouchableOpacity>
            <Text>Scanned is {props.scanData}</Text>
            </SafeAreaView>
        </ReactNativeModal>
    )
}

const ScreenHeight = Dimensions.get('screen').height
const ModalHeight = ScreenHeight * 0.3
const styles = StyleSheet.create({
    innerModal:{
        backgroundColor:'#F9F9F9',
        alignSelf:'center',
        height:ModalHeight,
        width:'99%',
        borderTopRightRadius:20,
        borderTopLeftRadius:20
    }
})