import React, {useContext} from "react";
import {View,TextInput, Button, StyleSheet, Text} from 'react-native';



export default function InputsPage({navigation:{navigate}}) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [errorMsg, setErrorMsg] = React.useState('');
    
    const filterInputs = () => {
        const isEmailValid = email.match(/@[a-z]+.[a-z]{2,3}/g)
        if(isEmailValid == null){
            // refuse the inputs
            setErrorMsg('Email incorrect');
        }
        //needs to add api call to check for username and email address avalaibility
    }
    const saveInputs = () => {
        filterInputs();
        const inputs = {
            username: username,
            password:password,
            email:email,
        }

        navigate("Card", {inputs:inputs});

    }
    return (
      <View style={styles.main}>
        <Text>{errorMsg}</Text>
        <TextInput
          placeholder="Adresse email"
          value={email}
          onChangeText={setEmail}
          style={styles.userField}
        />
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
        <Button title="Valider" style={styles.signInButton} onPress={() => saveInputs()} />
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