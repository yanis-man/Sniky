import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import ReactNativeModal from "react-native-modal";
import Icon from 'react-native-vector-icons/AntDesign'
import { SafeAreaView } from "react-native-safe-area-context";

import GlobalStyle from "../../assets/styles/main_style";

export default function ShoesInfoScreen(props){
}

const screenHeight = Dimensions.get('screen').height
const screenWidth = Dimensions.get('screen').width

const modalHeight = screenHeight * 0.9
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
      bottomModalView: {
        justifyContent: 'flex-end',
        margin: 0,
      },
      innerModal:{
        backgroundColor:'#F9F9F9',
        height:modalHeight,
        alignItems:'center',
      },
      topBar:{
        width:'100%',
        alignSelf:'center',
        backgroundColor:'transparent',
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between'
      },
      bottomBar:{

      },
      skipText:{
        fontSize:16,
        fontFamily:'Montserrat',
        color:'white'
      },   
      title:{
        fontSize:18,
        padding:5,
        textAlign:'center',
        fontFamily:'Montserrat_bold'
      },
      camera:{
          backgroundColor:'black',
          width:'100%',
          height:'100%'
      },
      infoContainer:{
          backgroundColor:'white',
          height:modalHeight*0.20,
          width:'100%'
      },
      scanned:{
          alignSelf:'center',
          alignItems:'center',
          backgroundColor:'#56C3F2',
          borderRadius:5,
          marginTop:10,
          width:screenWidth * .60,
          height:screenWidth *0.09,
          flexDirection:'row'
      },
      scannedText:{
          backgroundColor:'blue',
          alignSelf:'center',
          color:'white'
      }
})