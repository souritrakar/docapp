import React from 'react';
import { Text, View, StyleSheet,Dimensions,Image,Platform,SafeAreaView,ScrollView,Animated } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import {LinearGradient} from "expo-linear-gradient"
import WavyHeader from "../../components/WavyHeader"
import { WebView } from 'react-native-webview'; 
import firebase from "../../firebase"
import { TouchableHighlightBase } from 'react-native';

import { Card, ListItem, Button, Icon } from 'react-native-elements'

export default class DocPatients extends React.Component{

    constructor(props){
        super(props)
        
        this.state={

            patients:[],
            
        }
    }

    componentDidMount(){
        
        firebase.auth().onAuthStateChanged(cred=>{
          if(cred){
            firebase.firestore().collection("Doctors").doc(cred.email).collection("Patients").onSnapshot(snapshot=>{
              var pats=[]
              snapshot.forEach(doc=>{
                pats.push(doc.data())
              })
              this.setState({patients:pats})
          
            })
          }
          else{
            alert("Error signing in.")
            this.props.navigation.navigate("Login")
            
          }
           
        })

    }


    render(){

        return(
            <ScrollView style={styles.container}> 
      
     
            <Text style={styles.headerText}>My Patients</Text>
            <Text>{'\n'}</Text>
           

            {
                this.state.patients.map(pat=>{
                 return(
                   <View style={{width:Dimensions.get("window").width}}>
                  <Card>
                  <Card.Title numberOfLines={1} >Patient {pat.name}</Card.Title>
                  <Card.Divider/>
                  
                    <Text numberOfLines={1} style={{marginBottom: 10}}>
                      Address: Patient Address goes here
                    </Text>

                    <Text numberOfLines={1} style={{marginBottom: 10}}>
                     Contact: Patient Contact goes here
                    </Text>

                    <Text numberOfLines={1} style={{marginBottom: 10}}>
                      Patient Last Appointment
                    </Text>

                    <Button
                      icon={<Icon name='person' color='#ffffff' />}
                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='VIEW PROFILE' />
               
                </Card>
                </View>
                 )
               })
            }
        
           
        </ScrollView>
        )
    }
}





const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
    
    
    },
  
   
    headerText: {
      fontSize: Dimensions.get("window").width/8,
      fontWeight: 'bold',
      // change the color property for better output
      color: '#fff',
      textAlign: 'center',
      marginTop: 35
    },
   
    svgCurve: {
      position: 'absolute',
      width: Dimensions.get('window').width
    },
  
  
  });