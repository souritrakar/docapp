import {Ionicons} from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from "react"
import DocHome from "../screens/doctor/DocHome"
import DocApts from "../screens/doctor/DocApts"
import DocPatients from "../screens/doctor/DocPatients"
const Tab= createBottomTabNavigator()

const TabNavigator=()=>{
    return(
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home';
            }
            else if(route.name === "Appointments"){
              iconName= focused ? 'time' : 'time';
            }
            else if(route.name === "Patients"){
                iconName= focused ? 'people' : 'people'
              }
  
            // You can return any component that you like here!
            return <Ionicons  name={iconName} size={size} color={color} />;
        },
    })}
    tabBarOptions={{
        activeTintColor: '#42C0FB',
        inactiveTintColor: 'gray',
    }}>
        <Tab.Screen  name="Home" component={DocHome} />
      
        <Tab.Screen name="Appointments" component={DocApts}/>
        <Tab.Screen component={DocPatients} name="Patients" />
      </Tab.Navigator>
    )

}

export default TabNavigator