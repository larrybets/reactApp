
import React from 'react';
import {createStackNavigator} from "react-navigation"; // stack Navigator is deprecated...now use createStackNavigator!.
import StartScreen from "../screens/Start";
//import LoginScreen from "../screens/Login";

export default createStackNavigator(
        {
            Start: {
                screen: StartScreen
            },
          /** Login: {
               screen: LoginScreen
           },*/
        },
        {
            initialRouteName: 'Start',
            navigationOptions: {
                headerStyle: {
                    backgroundColor: 'red'
                },
                headerTitleStyle: {
                    textAlign: 'center',
                    alignSelf: 'center',
                    fontSize: 20,
                    color: '#fff',
                    fontWeight: 'bold'
                }
            }
        }

)