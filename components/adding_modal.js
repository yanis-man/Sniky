import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import ReactNativeModal from "react-native-modal";
import Icon from 'react-native-vector-icons/AntDesign'
import { SafeAreaView } from "react-native-safe-area-context";

import GlobalStyle from "../assets/styles/main_style";
import InputsModal from "./shoes_add/inputs_modal";

export default function ShoesAddModal(props){

    const [hasPermission, setHasPermission] = useState(null);
    const [hasAlreadyScanned, setScanStatus] = useState(false);
    const [scannedData, setScannedData] = useState('');
    const [cameraOn, setCameraState] = useState(false)
    const [displayInputs, setInputsState] = useState(false)
    useEffect(() => {
      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);

    // called when something is scanned
    const handleBarCodeScanned = ({ type, data }) => {
      setScanStatus(true)
      setScannedData(data, toggleInputsForm())
    };
    const handleRescan = () => setScanStatus(false)

    // called when the modal is closed : turn off the camera and reset all values
    const handleClosing = () => {
      setCameraState(!cameraOn)
      setScanStatus(false)
      props.close()
    }
    // called to show or hide the input form 
    const toggleInputsForm = () => {
      setCameraState(!cameraOn)
      setInputsState(!displayInputs)

    }

    if (hasPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return(
        <SafeAreaView style={GlobalStyle.modalContainer}>
            <ReactNativeModal
            style={GlobalStyle.bottomModalView}
            isVisible={props.visible}
            onBackdropPress={props.close}
            useNativeDriverForBackdrop={true}
            hideModalContentWhileAnimating={true}
            onModalShow={() => setCameraState(!cameraOn)}
            >
                <View style={styles.innerModal}>
                  {!displayInputs ? 
                  (
                    <>
                    { cameraOn ? 
                      (<BarCodeScanner style={styles.camera} onBarCodeScanned={(hasAlreadyScanned) ? null : handleBarCodeScanned}>
                          <View style={styles.topBar}>
                              <TouchableOpacity onPress={handleClosing} style={{backgroundColor:'transparent'}}>
                                <Text style={styles.skipText}>Annuler</Text>
                              </TouchableOpacity>
                              <TouchableOpacity onPress={toggleInputsForm} style={{backgroundColor:'transparent'}}>
                                <Text style={styles.skipText}>Passer</Text>
                              </TouchableOpacity>
                          </View>
                      </BarCodeScanner>):(
                        <>
                        <Text style={{alignContent:'center', justifyContent:'center'}}>Chargement</Text>
                        </>
                      )}
                    </>
                  ) : 
                  (<> 
                    <InputsModal visible={displayInputs} close={toggleInputsForm} scanData={scannedData}/>
                  </>)}
                </View>
            </ReactNativeModal>
        </SafeAreaView>
    )
}

const screenHeight = Dimensions.get('screen').height
const screenWidth = Dimensions.get('screen').width

const modalHeight = screenHeight * 0.9
const styles = StyleSheet.create({
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