import React from "react"
import {Text,View,Dimensions,StyleSheet,TextInput,TouchableOpacity,ScrollView} from "react-native"
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import firebase from "../../firebase"

export default class PatRegister extends React.Component{
    constructor(props){
        super(props)

        this.state={
            email:"",
            password:"",
            name:"",
 
            mobilenumber:""
        }
    }
    signUp(email,password){
      const {name,mobilenumber} = this.state
      firebase.auth().createUserWithEmailAndPassword(email,password).then(()=>{
        firebase.firestore().collection("Users").doc(email).set({
          type:"patient",
          email:email,
          name:name,
          
        }).then(()=>{
          firebase.firestore().collection("Patients").doc(email).set({
            email:email,
            name:name,
            
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
            <Text style={styles.loginHeader}>Patient Register</Text>
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
        
           
      
     
           
            <View style={styles.inputView} >
            <TextInput  
                style={styles.inputText}
                placeholder="Mobile" 
                placeholderTextColor="#003f5c"
                onChangeText={text => this.setState({mobilenumber:text})}/>
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
      backgroundColor: '#3F94B0',
      alignItems: 'center',
      justifyContent: 'center',
    },
    scrollViewWrapper: {
      marginTop: 70,
      
    },
    loginText:{
        color:"white"
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
        backgroundColor:"#243B56",
        borderRadius:20,
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