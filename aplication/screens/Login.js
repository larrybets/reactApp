import React from 'react';
import { View } from 'react-native';
import BackgroundImage from "../components/BackgroundImage";
import AppButton from "../components/AppButton";
import FormValidation from '../utils/validation';
import { Card } from "react-native-elements";
import t from 'tcomb-form-native';
import * as fireBase from 'firebase';
import Toast from 'react-native-simple-toast';
const Form = t.form.Form;


//import * as fireBase

export default class Login extends Component{
    constructor(){
        super();

            this.user = t.struct({
                email: FormValidation.email,
                password: FormValidation.password
            });

            this.options = {
                fields:{
                    email:{
                        help: 'Introduce tu email',
                        error: 'Email incorrecto',
                        autoCapitalize: 'none', // que no empiece con mayusculas
                    },
                    password: {
                        help: 'Introduce tu password',
                        error: 'Password incorrecto',
                        password: true,
                        secureTextEntry: true,
                    }
                }
            };
    }


    login (){
       
        
    }

    render () {
        return (
            <BackgroundImage source={require('../../assets/images/background.jpg')} >
                <View>
                    <Card wrapperStyle={{paddingLeft: 10}} title="Iniciar sesión">
                        <Form 
                            ref= "form"
                            type= {this.user}
                             options={this.options} 
                        />

                        <AppButton
                         bgColor="rgb(111, 38, 74)"
                         title= "Login"
                         action= {this.login.bind(this)}
                         iconName= "sign-in"
                         iconSize={30}
                         iconColor="#fff"
                         />
                    </Card>
                </View>
            
            </BackgroundImage>
        );
    }

}