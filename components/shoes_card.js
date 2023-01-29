import React, { useState } from "react";
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';

import InventoryModal from './shoes_inv_modal'

export const ShoesCardInventory = (props) => {
    const data = props.item
    const [modalVisible, setModalVisibility] = useState(false)

    const toggleModal = () => {
        setModalVisibility(!modalVisible)
    }
    return(
        <View>
            
        <TouchableOpacity style={styles.global} onPress={toggleModal}>
            <View style={styles.imageContainer}>
                
            <Image
                source={{uri:'https://th.bing.com/th/id/R.6992e13d9b03daba3fbcbf50cf0ab917?rik=vGLbpNeOuXz%2boA&pid=ImgRaw&r=0'}}
                resizeMode='center'
                style={styles.illustration}
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.name}>{data.name}</Text>
                <View style={styles.bottomCardText}>
                    <Text style={styles.number}>N°{data.number}</Text>
                    <Text style={styles.price}>€{data.price}</Text>

                </View>
            </View>
            <InventoryModal item={data} visible={modalVisible} close={toggleModal} />
        </TouchableOpacity>
        </View>
    )
}

export const ShoesCardHistory = (props) => {
    const data = props.item
    return(
        <TouchableOpacity style={styles.global}>
            <View style={styles.imageContainer}>
                
            <Image
                source={require('../assets/img/example.png')}
                resizeMode='center'
                style={styles.illustration}
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.name}>{data.name}</Text>
                <View style={styles.bottomCardText}>
                    <Text style={styles.number}>N°{data.number}</Text>
                    <Text style={styles.price}>€{data.price} - 110</Text>

                </View>
            </View>
        </TouchableOpacity>
    )
}

const screenWidth = Dimensions.get('screen').width
const screenHeight = Dimensions.get('screen').height

const styles = StyleSheet.create({
    global:{
        elevation:5,
        shadowColor:'#B9B9B9',
        borderRadius:5,
        height:90,
        width:screenWidth *0.95,
        backgroundColor:'#FDFDFC',
        flexDirection:'row',
        marginBottom:20
    },
    imageContainer:{
        borderRightWidth:.5,
        borderRightColor:"#E1E1E1",
        backgroundColor:'white',
        padding:7,
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5,
    },
    illustration:{
        height:80,
        width:80,
    },
    textContainer:{
        marginTop:11,
        marginLeft:10,
        width:'70%',
        backgroundColor:'#FDFDFC'
    },
    name:{
        fontFamily:'Montserrat_bold',
        fontSize:15
    },
    bottomCardText:{
        flexDirection:'row',
        marginTop:15,
        marginRight:5,
        justifyContent:'space-between',
    },
    number:{
        fontFamily:'Montserrat',
        fontSize:20,
        color:'#696969'
    },
    price:{
        fontFamily:'Montserrat',
        fontSize:20,
        color:'#121212'
    }
})