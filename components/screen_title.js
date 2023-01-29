import React from "react";
import { StyleSheet, Text, View } from 'react-native';


export default ScreenTitle = (props) => {
    return(
        <Text style={styles.text}>{props.label}</Text>
    )
}

const styles = StyleSheet.create({
    text:{
        fontFamily:'CaveatBrush',
        fontSize:30
    }
})