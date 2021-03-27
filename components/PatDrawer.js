import {  createDrawerNavigator } from "react-navigation-drawer";
import {Ionicons} from "@expo/vector-icons"
import React from "react"
import PatTab from "./PatTab"
import {createAppContainer} from "react-navigation" 
import ProfileScreen from "../screens/ProfileScreen"
const MainNavigator = createDrawerNavigator(
    
    {
      Home: {
        navigationOptions: {
          drawerIcon: () => (
            <Ionicons name="md-home" style={{ color: "4973AB" }} size={20} />
          ),
          drawerLabel: "Home"
        },
        screen: PatTab
      },
      
      Profile: {
        navigationOptions: {
          drawerIcon: ({ tintColor }) => (
            <Ionicons name="ios-person" style={{ color: "4973AB" }} size={20}/>
         
          ),
          drawerLabel: "Profile"
        },
        screen: ProfileScreen
      },
      
  
      

    }

  );

const DrawerNav= createAppContainer(MainNavigator)
export default DrawerNav