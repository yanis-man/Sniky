import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get('screen').width
const screenHeight = Dimensions.get('screen').height

const GlobalStyle = StyleSheet.create({
    text_input:{
        borderWidth:0.5,
        borderColor:'#B9B9B9',
        borderRadius:5,
        width: screenWidth * 0.5,
        height:screenHeight * 0.05,
        padding:6
    },
    text:{
        fontFamily:'Montserrat'
    },
    confirmButton:{
        width: screenWidth * 0.5,
        height:screenHeight * 0.05,
    },
    modalContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomModalView: {
        justifyContent: 'flex-end',
        margin: 0,
      },
})

export default GlobalStyle