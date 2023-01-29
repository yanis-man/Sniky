import React, { useState, createContext, useEffect, useReducer, useMemo } from "react";

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native';
import * as Font from 'expo-font';
import Apploading from 'expo-app-loading';
import * as SecureStore from 'expo-secure-store'

import InventoryScreen from './screens/inventory_screen';
import HistoryScreen from './screens/history_screen';
import LoginScreen from "./screens/auth/login";
import ProfileScreen from "./screens/profil_screen";
import RegisterScreen from './screens/auth/register'

export const AuthContext = createContext()
export default function App({navigation}) {
  
  const [fontsloaded, setFontsLoaded] = useState(false);
  const [isSignedIn, setSignedIn] = useState(false);
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async (data) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );

  async function getFonts(){
  await Font.loadAsync({
    Montserrat: require("./assets/fonts/Montserrat-Regular.ttf"),
    Montserrat_bold: require("./assets/fonts/Montserrat-Bold.ttf"),
    Montserrat_semi_bold: require("./assets/fonts/Montserrat-SemiBold.ttf"),
    Montserrat_light: require("./assets/fonts/Montserrat-Light.ttf"),
  });
  }

  if (fontsloaded) {
    const BottomTab = createBottomTabNavigator()
    const screenOption = {
      headerShown:false,
    }
    return (
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          <BottomTab.Navigator screenOptions={screenOption}>
            { state.userToken != null ? (
              <>
                <BottomTab.Screen name="Inventaire" component={InventoryScreen}/>
                <BottomTab.Screen name="Historique" component={HistoryScreen} initialParams={{isHistory:true}} />
                <BottomTab.Screen name="Profil" component={ProfileScreen} initialParams={{isHistory:true}} />
              </>
            ) : (
              <>
                <BottomTab.Screen name="Connexion" component={LoginScreen}/>
                <BottomTab.Screen name="Inscription" component={RegisterScreen}/>
              </>
            )}
          </BottomTab.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    );
  } else {
    return (
      <Apploading
        startAsync={getFonts}
        onFinish={() => {
          setFontsLoaded(true);
        }}
        onError={console.warn}
      />
    );
  }
}