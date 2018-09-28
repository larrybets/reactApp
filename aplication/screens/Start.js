import React,{ Component } from 'react';
import { View } from 'react-native';
import BackgroundImage from "../components/BackgroundImage";
import AppButton from "../components/AppButton";
import { NavigationActions } from 'react-navigation';
import Toast from 'react-native-simple-toast';

import * as firebase from 'firebase';
import facebook from '../utils/facebook';


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
        const navigateAction = NavigationActions.navigate({
            routeName: 'Register'
        });
        this.props.navigation.dispatch(navigateAction);
    }

    async facebook () {
        const {type, token} = await Expo.Facebook.logInWithReadPermissionsAsync(
            facebook.config.aplication_id,
            {permissions: facebook.config.permissions}
        )

        if(type === "success"){
            const credentials = firebase.auth.FacebookAuthProvider.credential(token);
            firebase.auth().signInWithCredential(credentials)
                .catch(error => {
                     Toast.showWithGravity('Accediendo a sapiencial...', Toast.LONG, Toast.BOTTOM);
                })
        } else if (type === "cancel"){
             Toast.showWithGravity('Parece ser que hemos usado la gema del tiempo para cancelar!', Toast.LONG, Toast.BOTTOM);
        } else {
            Toast.showWithGravity('Ni con el guantelete sabríamos que ha sucedido...:(',  Toast.LONG, Toast.BOTTOM);
        }
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