import React from 'react';
import { Text, View, StyleSheet,Dimensions,Image,Platform,SafeAreaView,ScrollView,Animated } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import {LinearGradient} from "expo-linear-gradient"
import WavyHeader from "../../components/WavyHeader"
import { WebView } from 'react-native-webview'; 
import firebase from "../../firebase"

export default class DocApts extends React.Component{
    render(){
        return(
            <View style={styles.container}>
            <WavyHeader  customColor='orange'  customStyles={styles.svgCurve} />
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>Appointments</Text>
  </View>
          
          </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    
    },
  
    appheading:{
     
      fontSize:Dimensions.get("window").width/11.5,
      marginTop:Dimensions.get("window").height/25
    },
    logo:{
    width:Dimensions.get("window").width/2.21,
    height:Dimensions.get("window").height/4.3,
  
    marginTop:Dimensions.get("window").height/14
    },
    ngoregister: {
      marginTop: Dimensions.get("window").height/20,
    
      width: '67%',
      height: Dimensions.get("window").height / 15,
      backgroundColor: '#FF5F6D',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
    },
   patientregister: {
      marginTop: Dimensions.get("window").height/15,
      width: '67%',
      height: Dimensions.get("window").height / 15,
      backgroundColor: 'orange',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
    },
    userregister: {
      marginTop: Dimensions.get("window").height/20,
      width: '67%',
      height: Dimensions.get("window").height / 15,
      backgroundColor: '#2e64e5',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      shadowOpacity:5
    },
    headerText: {
      fontSize: Dimensions.get("window").width/8,
      fontWeight: 'bold',
      // change the color property for better output
      color: '#fff',
      textAlign: 'center',
      marginTop: 35
    },
    login: {
      marginTop: Dimensions.get("window").height/15,
      width: '67%',
      height: Dimensions.get("window").height / 15,
  backgroundColor:"#1D976C",
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      marginBottom:Dimensions.get("screen").height/10
    },
    userlogin: {
      marginTop: Dimensions.get("window").height/15,
      width: '67%',
      height: Dimensions.get("window").height / 15,
  backgroundColor:"#FFC371",
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 3,
  
    },
    svgCurve: {
      position: 'absolute',
      width: Dimensions.get('window').width
    },
  
  
  });