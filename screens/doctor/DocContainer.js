import React from 'react'
import { Text, View, StyleSheet,Dimensions,Image,Platform,SafeAreaView,ScrollView,ImageBackground} from 'react-native';
import TabNavigator from "../../components/TabNavigator"
import firebase from "../../firebase"
import DrawerNav from "../../components/DrawerNav"

export default class DocContainer extends React.Component{
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
                firebase.firestore().collection("Doctors").doc(cred.email).get().then(doc=>{
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
                <DrawerNav/>
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
    }
  
})