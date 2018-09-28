import React, {Component} from 'react';
import { View } from 'react-native';
import BackgroundImage from "../components/BackgroundImage";
import AppButton from "../components/AppButton";
import { Card } from "react-native-elements";
import Toast from 'react-native-simple-toast';


import t from 'tcomb-form-native';
const Form = t.form.Form;

import FormValidation from '../utils/validation';

import * as firebase from 'firebase';

export default class Register extends Component{

    constructor () {
        super();

        this.state = {
            user:{
                //email:'',
                //password: '',
            }
        };

        this.samePassword = t.refinement(t.String, (s) => {
            return s === this.state.user.password
        });

        this.user = t.struct({
            email: FormValidation.email,
            password: FormValidation.password,
            password_confirmation: this.samePassword

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
                },
                password_confirmation: {
                    help: 'Repite el password',
                    error: 'Los passwords no coinciden',
                    password: true,
                    secureTextEntry: true,
                }
            }
       };

        this.validate = null;

    }

        register(){
            if(this.validate){
                    firebase.auth().createUserWithEmailAndPassword(
                        this.validate.email, this.validate.password
                    ).then(() =>{
                        Toast.showWithGravity('Registro correcto, bienvenido', Toast.LONG, Toast.BOTTOM);
                    })
                    .catch (err => {
                        Toast.showWithGravity(err.message, Toast.LONG, Toast.BOTTOM);
                    })
            }
        }

        onChange(user){
            this.setState({user});
            this.validate = this.refs.form.getValue();
        
        }

        render() {
            return (
                    <BackgroundImage source={require('../../assets/images/background.jpg')} >
                        <View>
                            <Card wrapperStyle={{paddingLeft: 10}} title="Registrate">
                                <Form 
                                        ref="form"
                                        type={this.user}
                                        options={this.options}
                                        onChange={(v) => this.onChange(v)}
                                        value={this.state.user}
                                />
                                 <AppButton
                                        bgColor="rgb(111, 38, 74)"
                                        title= "Registrate"
                                        action= {this.register.bind(this)}
                                        iconName= "user-plus"
                                        iconSize={30}
                                        iconColor="#fff"
                                />

                            </Card>
                        </View>
                    </BackgroundImage>
                )
        }

}