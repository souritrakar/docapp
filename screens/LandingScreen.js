import React from 'react';
import { Text, View, StyleSheet,Dimensions,Image,Platform,SafeAreaView,ScrollView,Animated } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import {LinearGradient} from "expo-linear-gradient"
import Custombutton from "../components/Custombutton"
import Svg, { Path } from 'react-native-svg';
import WavyHeader from '../components/WavyHeader';
import { WebView } from 'react-native-webview'; 


export default class HomeScreen extends React.Component {


constructor(props){
  super(props)
  this.state={
    value:new Animated.Value(90),
    fadeAnim : new Animated.Value(0),
    buttonOpacity:0
  }

}


componentDidMount(){
  //size will increase
  
  Animated.timing(this.state.value,{toValue:1,duration:1000}).start()
  Animated.timing(this.state.fadeAnim, {
    toValue: 1,
    duration: 5000
  }).start();
  for(let i=0;i<3;i++){
    this.setState({buttonOpacity:i})
  }

}


  render() {
    const scale=this.state.value
      return (
        <LinearGradient
        colors={['#EF3B36', '#F2F2F2','#DBDBDB',"#FFFFFF"]}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 5, y: 5 }}
      >
    
         
      <WavyHeader customColor='#ff5500' customStyles={styles.svgCurve} />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>HeartBeat</Text>
      </View>
      <Animated.View style={{transform:[{scale}]}}>
      <Image
        source={require('../assets/hearbeat.png')}
        style={styles.logo}
        
        />
      </Animated.View>
    
         <Custombutton
        buttonTitle="DOCTOR"
      

        onPress={()=>{this.props.navigation.navigate("DocRegister")}}
        buttonContainer={styles.ngoregister}

        />
            <Custombutton
        buttonTitle="PATIENT"
  
        onPress={()=>{this.props.navigation.navigate("PatRegister")}}
        buttonContainer={styles.patientregister}

        />


      <Custombutton  

        onPress={()=>{this.props.navigation.navigate("Login")}} 
        buttonContainer={styles.login} buttonTitle="LOGIN"  />

     
</LinearGradient>
     
      );
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