import React from 'react';
import MapPicker from "react-native-map-picker";
import {View} from "react-native";
 
 
export default class LocationPicker extends React.Component {
  state = {
 
  };
 
  render() {
    return(
      <View style={{flex: 1}}>
        <MapPicker
          initialCoordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          onLocationSelect={({latitude, longitude})=>console.log(longitude)}
        />
      </View>
    );
  }
}