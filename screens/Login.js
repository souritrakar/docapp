import React from "react"
import {Text,View,Dimensions,StyleSheet,TextInput,TouchableOpacity,ScrollView} from "react-native"
import parseErrorStack from "react-native/Libraries/Core/Devtools/parseErrorStack";
import WavyHeader from '../components/WavyHeader';
import firebase from "../firebase"

export default class Login extends React.Component{
    constructor(props){
        super(props)

        this.state={
            email:"",
            password:""
        }
    }

    login(email,password){
    
      firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
        firebase.firestore().collection("Users").doc(email.toLowerCase()).get().then((doc)=>{
          if(doc.data().type==="patient"){
            this.props.navigation.replace("PatContainer")
          }
          else if(doc.data().type==="doctor"){
            this.props.navigation.replace("DocContainer")
          }
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
            <Text style={styles.loginHeader}>Login</Text>
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
                <TouchableOpacity onPress={()=>{this.login(this.state.email,this.state.password)}} style={styles.loginBtn}>
              <Text style={styles.loginText}>LOGIN</Text>
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
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
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