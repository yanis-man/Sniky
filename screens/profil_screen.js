import React, { useContext } from 'react';
import {SafeAreaView, Text, Button} from 'react-native';

import BaseScreen from '../components/base_screen';
import { AuthContext } from '../App';

export default function ProfileScreen(){
    const { signOut } = useContext(AuthContext)
    return(
        <SafeAreaView>
            <BaseScreen colors={['#3fe700', '#0d9600']} label={"Profil"}>
            </BaseScreen>
            <Text>ok</Text>
            <Button title={"Déconnecter"} onPress={() => signOut({})}></Button>
        </SafeAreaView>
    )
}