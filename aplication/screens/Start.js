import React,{ Component } from 'react';
import { View } from 'react-native';
import BackgroundImage from "../components/BackgroundImage";
import AppButton from "../components/AppButton";
import { NavigationActions } from 'react-navigation';
import Toast from 'react-native-simple-toast';

import * as firebase from 'firebase';

export default class Start extends Component{

    static navigationOptions = {
        title: 'Login'

    };
    
    login () {
        const navigateAction = NavigationActions.navigate({
            routeName: 'Login'
        });
        this.props.navigation.dispatch(navigateAction);
    }

    register () {

    }

    async facebook () {

    }

    render () {
        return (
            <BackgroundImage source={require('../../assets/images/background.jpg')}>
                <View style={{justifyContent: 'center', flex: 1}}>
                    <AppButton
                         bgColor="rgb(11, 38, 74)"
                         title= "Entrar"
                         action= {this.login.bind(this)}
                         iconName= "sign-in"
                         iconSize={30}
                         iconColor="#fff"
                   
                    />

                     <AppButton
                         bgColor="rgb(67, 171, 153)"
                         title= "Registrarse"
                         action= {this.register.bind(this)}
                         iconName= "user-plus"
                         iconSize={30}
                         iconColor="#fff"
                   />

                     <AppButton
                         bgColor="rgb(45, 55, 243)"
                         title= "Facebook"
                         action= {this.facebook.bind(this)}
                         iconName= "facebook"
                         iconSize={30}
                         iconColor="#fff"
                   />
                    <AppButton
                         bgColor="rgb(220, 55, 47)"
                         title= "Google"
                         action= {this.facebook.bind(this)}
                         iconName= "google"
                         iconSize={30}
                         iconColor="#fff"
                   />
                </View>
            </BackgroundImage>
        );
    }

}