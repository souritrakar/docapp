import {Ionicons} from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from "react"
import DocHome from "../screens/doctor/DocHome"
import DocApts from "../screens/doctor/DocApts"
import DocPatients from "../screens/doctor/DocPatients"
import PatHome from "../screens/patient/PatHome"
import PatPrescriptions from "../screens/patient/PatPrescriptions"
import PatApts from "../screens/patient/PatApts"
import DoctorSearch from "../screens/DoctorSearch"
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";


const Tab= AnimatedTabBarNavigator();

const PatTab=()=>{
    return(
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home';
            }
            else if(route.name === "Prescriptions"){
              iconName= focused ? 'list' : 'list';
            }
            else if(route.name === "Appointments"){
                iconName= focused ? 'calendar' : 'calendar'
              }
              else if(route.name === "Search"){
                iconName= focused ? 'search' : 'search'
              }
  
            // You can return any component that you like here!
            return <Ionicons  name={iconName} size={size} color={color} />;
        },
    })}
    tabBarOptions={{
      activeTintColor: "#2F7C6E",
      inactiveTintColor: "#222222",
      floating:true
    }}
    >
        <Tab.Screen  name="Home" component={PatHome} />
      
        <Tab.Screen name="Prescriptions" component={PatPrescriptions}/>
        <Tab.Screen component={PatApts} name="Appointments" />
        <Tab.Screen component={DoctorSearch} name="Search" />
      </Tab.Navigator>
    )

}

export default PatTab