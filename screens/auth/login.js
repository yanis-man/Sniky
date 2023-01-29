import React, {useContext} from "react";
import {View,TextInput, Button, StyleSheet} from 'react-native';

import { AuthContext } from "../../App";

export default function SignInScreen() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
  
    const { signIn } = useContext(AuthContext);
  
    return (
      <View style={styles.main}>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          style={styles.userField}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.passField}
        />
        <Button title="Connexion" style={styles.signInButton} onPress={() => signIn({ username, password })} />
      </View>
    );
  }

const styles = StyleSheet.create({
  main:{
    width:'90%',
    height:'100%',
    alignSelf:'center',
    justifyContent:'center',
  },
  userField:{
    marginBottom:'4%'
  },
  passField:{
    marginBottom:'4%'
  },
  signInButton:{
    backgroundColor:'black'
  }
})