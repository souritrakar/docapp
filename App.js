import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Dimensions,Button } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import { createStackNavigator} from "@react-navigation/stack"
import LandingScreen from "./screens/LandingScreen"
import Login from "./screens/Login"
import DocRegister from "./screens/doctor/DocRegister"
import PatRegister from "./screens/patient/PatRegister"
import DocHome from './screens/doctor/DocHome';
import DocContainer from './screens/doctor/DocContainer';
import PatContainer from './screens/patient/PatContainer';
import LocationPicker from "./screens/LocationPicker"
const Stack= createStackNavigator()

function MyStack(){
  return(
    <Stack.Navigator
    screenOptions={{
      headerStyle:{
        backgroundColor:'#E2E2E2',
        height:Dimensions.get("window").height/13
      },
      
      headerTintColor:'black',
      headerTitleStyle:{
        fontWeight:'bold',
        
      }
    }}
    >
      <Stack.Screen
       name="HomeScreen"
  
       component={LandingScreen}
       options={{title:'HeartBeat'}}
       
       />
  
          <Stack.Screen
       name="Login"
  
       component={Login}
       options={{title:'Login'}}/>
  
          <Stack.Screen
       name="DocRegister"
  
       component={DocRegister}
       options={{title:'Doctor Register'}}/>
  
          <Stack.Screen
       name="PatRegister"
  
       component={PatRegister}
       options={{title:'Patient Register'}}/>


        <Stack.Screen
       name="DocContainer"
  
       component={DocContainer}
       options={{title:'Home',headerLeft:null, }}

       />

         <Stack.Screen
       name="PatContainer"
  
       component={PatContainer}
       options={{title:'Home',headerLeft:null}}
       
       />

  
      </Stack.Navigator>
  )
  
}

export default class App extends React.Component {
  render(){
    return (
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
     );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height:"100%"
  },
});
