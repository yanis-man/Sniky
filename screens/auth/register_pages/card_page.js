import React from "react";
import { SafeAreaView, View } from "react-native";
import {CreditCardInput, LiteCreditCardInput} from 'react-native-credit-card-input'

export default function CardDetailsPage({navigation}){
    const saveData = form => {

    }
    const on_change = form => {
        if(form.status){
            
        }
    }
    return(
        <View
        style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            marginTop:'10%'

        }}>
            <CreditCardInput onChange={on_change}
            style={{backgroundColor:'red'}}
            requiresName={true}
            allowScroll={true}/>
        </View>
    )
}
