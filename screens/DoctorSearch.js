import React, { createElement } from "react"
import { SearchBar } from 'react-native-elements';
import {Button, Text,View,ToastAndroid, Dimensions} from "react-native"
import firebase from "../firebase"
import { Card, ListItem, Button as CardButton, Icon } from 'react-native-elements'


export default class DoctorSearch extends React.Component{

    constructor(props){
        super(props)
        
        this.state={
            searchQuery:"",
            doctors: [],
            cred:{},
            contact:""

        }
    }

    searchDoctor=(text)=>{

        firebase.firestore().collection("Doctors").where("speciality","==",text.toLowerCase()).get().then(snapshot=>{
            const docarray=[]
            snapshot.forEach(doc=>{
                docarray.push(doc.data())
            })
            this.setState({doctors:docarray})
        })

    }


    componentDidMount(){
        firebase.auth().onAuthStateChanged(cred=>{
            if(cred){
                firebase.firestore().collection("Users").doc(cred.email).get().then(doc=>{
                    this.setState({cred:doc.data()})
                })
                firebase.firestore().collection("Doctors").onSnapshot(snapshot=>{
                    const newarray=[]
                    snapshot.forEach(doc=>{
                        newarray.push(doc.data())
                    })
                    this.setState({doctors:newarray})
                })
            }
            else{
                alert("error")
            }
        })
       
    }

    addDoctor(doctor){
        firebase.firestore().collection("Doctors").doc(doctor.email).collection("Patients").where("patientemail","==",this.state.cred.email).get().then(doc=>{
            if(doc===true){
              alert("Can't add existing doctor.")
            }
            else{
                firebase.firestore().collection("Doctors").doc(doctor.email.toString()).collection("Patients").doc(this.state.cred.email.toString()).set({
                    patientname:this.state.cred.name,
                    patientcontact:this.state.contact,
                    patientemail:this.state.cred.email
                }).then(()=>{
                    alert("Doctor has been added.")
                })
            }
        })
        
    }

    render(){
        return(
            <View>
            <SearchBar
            placeholder="Search Doctors..."å
            onChangeText={(text)=>{this.setState({searchQuery:text})}}
            value={this.state.searchQuery}
          />
          <Text style={{textAlign:"center",fontSize:Dimensions.get("window").width/8,fontWeight:"bold"}}>Doctors on HeartBeat:</Text>
  
          {
              this.state.doctors.map(doc=>{
                  
                  return(
                    <Card>
                    <Card.Title numberOfLines={1} >Doctor {doc.name}</Card.Title>
                    <Card.Divider/>
                    
                      <Text numberOfLines={1} style={{marginBottom: 10}}>
                       Clinic Address : Address here
                      </Text>
    
                      <Text numberOfLines={1} style={{marginBottom: 10}}>
                       Contact: Mobile Number here
                      </Text>
    
                      <Text numberOfLines={1} style={{marginBottom: 10}}>
                        Patient Last Appointment
                      </Text>
    
                      <CardButton
                        icon={<Icon name='person' color='#ffffff' />}
                        onPress={()=>{this.addDoctor(doc)}}

                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='ADD DOCTOR' />
                 
                  </Card>
                  )
              })
          }
          </View>

        )
    }
}