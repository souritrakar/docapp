import React from "react"
import TabNavigator from "../../components/TabNavigator"
import firebase from "../../firebase"
import PatDrawer from "../../components/PatDrawer"
import { Text, View, StyleSheet,Dimensions,Image,Platform,SafeAreaView,ScrollView,Animated,ImageBackground} from 'react-native';

export default class PatContainer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            cred:{},
            loaded:false
        }
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged(cred=>{
            if(cred){
                firebase.firestore().collection("Patients").doc(cred.email).get().then(doc=>{
                    this.setState({cred:doc.data()})
                }).then(()=>{
                  this.setState({loaded:true})
                })
            }
        })
    }
    render(){
        if(this.state.loaded===false){
            return(
                <ImageBackground source={require('../../assets/heartbeat.gif')} style={styles.logo}>
           
              </ImageBackground>
            )
          }
          else{
            return(
                <PatDrawer/>
            )
          }
       
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
        width: '100%', 
        height: '100%',
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