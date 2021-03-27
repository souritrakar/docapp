import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Dimensions} from 'react-native';


import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Custombutton = ({buttonContainer, disabledprop,buttonTitle,buttonOpacity, ...rest}) => {
    return (
     
      <TouchableOpacity   disabled={disabledprop} style={buttonContainer} {...rest}>
        <Text style={styles.buttonText}>{buttonTitle}</Text>
      </TouchableOpacity>

    );
  };
  
  export default Custombutton;
  
  const styles = StyleSheet.create({
  
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#ffffff',
      
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    
    },
  });