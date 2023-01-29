import React from "react";
import {View, StyleSheet, Text, Dimensions, Image, TouchableOpacity} from 'react-native';
import ReactNativeModal from "react-native-modal";
import {LinearGradient} from 'expo-linear-gradient';

import Icon from 'react-native-vector-icons/AntDesign'

import {ModalNav} from "./navigator/inv_modal_navigator";

export default function InventoryModal(props){
    const data = props.item

        return(
          <View style={styles.container}>
            <ReactNativeModal style={styles.bottomModalView} 
            isVisible={props.visible} 
            onBackdropPress={props.close} 
            onBackButtonPress={props.close} 
            avoidKeyboard={true}
            animationInTiming={250}
            animationOutTiming={250}
            backdropTransitionInTiming={400}
            backdropTransitionOutTiming={350}
            useNativeDriverForBackdrop={true}>
              <View style={styles.innerModal}>
                <View style={{}}>
                  <LinearGradient
                  colors={["#3F5269", 'rgba(0,0,0,0)']}
                  locations={[.50, 0.65]}
                  style={styles.gradient}
                  >
                    <View style={styles.titleAndActions}>
                      <View style={styles.illustrationContainer}>
                        <Image
                            source={{uri:'https://th.bing.com/th/id/R.6992e13d9b03daba3fbcbf50cf0ab917?rik=vGLbpNeOuXz%2boA&pid=ImgRaw&r=0'}}
                            resizeMode='center'
                            style={styles.illustration}
                        />
                      </View>
                      <Text style={styles.title}>{data.name}</Text>
                      <Text style={styles.status}>Status : En stock</Text>
                    </View>
                  </LinearGradient>
                </View>
                <View style={styles.infoContainer}>
                  <View style={styles.infoBox}>
                    <Text style={styles.infoText}>{data.size}</Text>
                    <Text style={styles.labelText}>pointure</Text>
                  </View>
                  <View style={styles.infoBox}>
                    <Text style={styles.infoText}>€{data.price}</Text>
                    <Text style={styles.labelText}>prix d'achat</Text>
                  </View>
                  <View style={styles.infoBox}>
                    <Text style={styles.infoText}>{data.number}</Text>
                    <Text style={styles.labelText}>N° de boîte</Text>
                  </View>
                </View>
                <ModalNav style={styles.nav} item={data} />
                <TouchableOpacity onPress={props.close} style={{backgroundColor:'transparent', marginBottom:10}}>
                  <Icon name="down" size={30} style={{alignSelf:'center'}}></Icon>
                </TouchableOpacity>
              </View>
            </ReactNativeModal>
          </View>
    );
    }
const screenWidth = Dimensions.get('screen').width
const screenHeight = Dimensions.get('screen').height

const modalHeight = screenHeight * .75
const modalWidth = screenWidth *.97

const illustrationSize = screenHeight * 0.13

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
        height:modalHeight,
        width:modalWidth,
        alignSelf:'center',
        backgroundColor:'#F9F9F9',
        borderTopLeftRadius:15,
        borderTopRightRadius:15
      },
      gradient:{
        height:modalHeight *0.72,
        borderTopLeftRadius:15,
        borderTopRightRadius:15

    },
    title:{
        fontFamily:'Montserrat_semi_bold',
        color:'white',
        fontSize:27,
        textAlign:'center',
    },
    status:{
      color:'#444444',
      fontFamily:'Montserrat_semi_bold',
      backgroundColor:'white',
      marginTop:5,
      alignSelf:'center',
      padding:3,
      fontSize:17
    },
    illustrationContainer:{
      alignSelf:'center',
    },
    illustration:{
      height:illustrationSize,
      width:illustrationSize + 40,
    },
    menuButton:{
        fontFamily:'Montserrat',
        color:'white',
        fontSize:45
    },
    infoContainer:{
        flexDirection:'row',
        elevation:5,
        borderRadius:5,
        backgroundColor:"white",
        height:modalHeight*0.15,
        width:modalWidth *.95,
        alignSelf:'center',
        marginTop: - modalHeight *0.39,
        justifyContent:'space-around',
        alignContent:'center'
    },
    infoBox:{
        alignSelf:'center'
    },
    infoText:{
        textAlign:'center',
        fontFamily:'Montserrat_semi_bold',
        fontSize:28
    },
    labelText:{
        textAlign:'center',
        fontFamily:'Montserrat',
        color:'#8E8E8E',
        fontSize:18,
        marginTop:4
    },
    nav:{
      marginLeft:100,
      alignSelf:'center'
    }
    });