import React from "react"
import {Text,View,Dimensions,StyleSheet,TextInput,TouchableOpacity,ScrollView} from "react-native"
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Fontisto';
import firebase from "../../firebase"

export default class DocRegister extends React.Component{
    constructor(props){
        super(props)

        this.state={
            email:"",
            password:"",
            name:"",
            speciality:"Allergy and Immunology",
       
            city:"",
            cliniclocation:"",
            mobilenumber:""
        }
    }

    signUp(email,password){
      const {name,speciality,age,city,cliniclocation,mobilenumber} = this.state
      firebase.auth().createUserWithEmailAndPassword(email,password).then(()=>{
        firebase.firestore().collection("Users").doc(email).set({
          type:"doctor",
          email:email,
          name:name,
          
        }).then(()=>{
          firebase.firestore().collection("Doctors").doc(email).set({
            email:email,
            name:name,
            speciality:speciality,
            cliniclocation:cliniclocation,
            mobilenumber:mobilenumber,
            password:password
          })
        }).then(()=>{
          this.props.navigation.navigate("Login")
        })
      }).catch(err=>{
        alert(err)
      })


    }
    render(){
        return(
            <View style={styles.container}>
             <View style={styles.scrollViewWrapper}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.loginHeader}>Doctor Register</Text>
          </ScrollView>
         </View>

 
            <View style={styles.inputView} >

            <TextInput  
                style={styles.inputText}
                placeholder="Email" 
                placeholderTextColor="#003f5c"
                onChangeText={text => this.setState({email:text})}/>
            </View>
            <View style={styles.inputView} >
            <TextInput  
                style={styles.inputText}
                placeholder="Password" 
                placeholderTextColor="#003f5c"
                onChangeText={text => this.setState({password:text})}/>
            </View>
            <View style={styles.inputView} >
            <TextInput  
                style={styles.inputText}
                placeholder="Name" 
                placeholderTextColor="#003f5c"
                onChangeText={text => this.setState({name:text})}/>
            </View>
        
            <DropDownPicker
        items={[
        {label: "Allergy and Immunology", value: "Allergy and Immunology", icon: () => <Icon name="doctor"size={18} color="#900" />, },
        {label: "Anesthesiology", value: "Anesthesiology", icon: () => <Icon name="doctor"size={18} color="#900" />, },
        {label: "Dermatology", value: "Dermatology", icon: () => <Icon name="doctor"size={18} color="#900" />, },
        {label: "Diagnostic radiology", value: "Diagnostic radiology", icon: () => <Icon name="doctor"size={18} color="#900" />, },
        {label: "Emergency medicine", value: "Emergency medicine", icon: () => <Icon name="doctor"size={18} color="#900" />, },
        {label: "Family medicine", value: "Family medicine", icon: () => <Icon name="doctor"size={18} color="#900" />, },
        {label: "Internal medicine", value: "Internal medicine", icon: () => <Icon name="doctor"size={18} color="#900" />, },
        {label: "Medical genetics", value: "Medical genetics", icon: () => <Icon name="doctor"size={18} color="#900" />, },
        {label: "Neurology", value: "Neurology", icon: () => <Icon name="doctor"size={18} color="#900" />, },
        {label: "Nuclear medicine",  value: "Nuclear medicine", icon: () => <Icon name="doctor"size={18} color="#900" />, },
        {label: "Obstetrics and Gynecology", value: "Obstetrics and Gynecology", icon: () => <Icon name="doctor"size={18} color="#900" />, },
        {label: "Ophthalmology", value: "Ophthalmology", icon: () => <Icon name="doctor"size={18} color="#900" />, }, 
        {label: "Pathology", value: "Pathology", icon: () => <Icon name="doctor"size={18} color="#900" />, },

        {label: "Pediatrics", value: "Pediatrics", icon: () => <Icon name="doctor"size={18} color="#900" />, },
        {label: "Physical medicine and rehabilitation", value: "Physical medicine and rehabilitation",icon: () => <Icon name="doctor"size={18} color="#900" />, },
        {label: "Preventive medicine", value: "Preventive medicine", icon: () => <Icon name="doctor"size={18} color="#900" />, },
        {label:  "Psychiatry", value: "Psychiatry", icon: () => <Icon name="doctor"size={18} color="#900" />, }, 
        {label: "Radiation oncology", value: "Radiation oncology", icon: () => <Icon name="doctor"size={18} color="#900" />, },
        
        {label: "Surgery", value: "Surgery", icon: () => <Icon name="doctor"size={18} color="#900" />},
        {label: "Urology", value: "Urology", icon: () => <Icon name="doctor"size={18} color="#900" />},
        ]}
        defaultValue="Allergy and Immunology"
        containerStyle={{height: 40,width:Dimensions.get("window").height/3}}
        style={{backgroundColor: '#fafafa'}}
        itemStyle={{
            justifyContent: 'flex-start'
        }}
        dropDownStyle={{backgroundColor: '#fafafa'}}
        onChangeItem={item=>{this.setState({speciality:item.value})}}
    
        />
        <Text>{'\n'}</Text>
     
           
            <View style={styles.inputView} >
            <TextInput  
                style={styles.inputText}
                placeholder="Mobile" 
                placeholderTextColor="#003f5c"
                onChangeText={text => this.setState({mobilenumber:text})}/>
            </View>
           
            <View style={styles.inputView} >
            <TextInput  
                style={styles.inputText}
                placeholder="Clinic Location" 
                placeholderTextColor="#003f5c"
                onChangeText={text => this.setState({cliniclocation:text})}/>
            </View>
                <TouchableOpacity onPress={()=>{this.signUp(this.state.email,this.state.password)}} style={styles.loginBtn}>
              <Text style={styles.loginText}>SIGN UP</Text>
             </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2C7744',
      alignItems: 'center',
      justifyContent: 'center',
    },
    scrollViewWrapper: {
      marginTop: 70,
      
    },
    
    loginHeader: {
      fontSize: 28,
      color: "white",
      fontWeight: "300",
      marginBottom: Dimensions.get("window").height/15
    },
    
    inputView:{
        width:"80%",
        backgroundColor:"white",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20,
        
    
      },
      headerContainer:{
        justifyContent: 'space-between'
      },
      inputText:{

        color:"black",
        
      },
    loginBtn:{
        width:"80%",
        backgroundColor:"#6dd5ed",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
       
        marginBottom:10
      },
      svgCurve: {
        position: 'absolute',
        width: Dimensions.get('window').width
      },
      headerText: {

        fontSize: Dimensions.get("window").width/8,
        fontWeight: 'bold',
        // change the color property for better output
        color: '#fff',
        textAlign: 'center',
        
        marginTop: 35,
        alignSelf: 'flex-end'
      },
  });