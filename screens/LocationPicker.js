import * as React from 'react';

import { StyleSheet, Text, View, Dimensions } from 'react-native';
 
export default class LocationPicker extends React.Component {

 
  render() {
    return(
      <View style={styles.container}>
        <Text>Hello</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});