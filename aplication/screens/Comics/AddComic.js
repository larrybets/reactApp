import React, {Component} from 'react';
import BackgroundImage from "../../components/BackgroundImage";
import AppButton from "../../components/AppButton";
import {View, StyleSheet} from 'react-native';
import {options, Comic} from '../../forms/comic';
import t from 'tcomb-form-native';
import {Card} from "react-native-elements";
const Form = t.form.Form;
import Toast from 'react-native-simple-toast';
import { ScrollView } from 'react-native-gesture-handler';

export default class AddComic extends Component{
        constructor (){
            super();
            this.state = {
                    comic: {
                        name:'',
                        editorial: '',
                        price: 0,
                        description: '',
                        note: 0
                        }
             };
        } 

        save  () {

        }

        onChange (comic) {
            this.setState({comic});
        }

        render () {
            const {comic} = this.state;

            return(
             <ScrollView contentContainerStyle={styles.container}>
                <BackgroundImage srouce={require('../../../assets/images/background.jpg')}>
                    <View style={styles.container}>
                        <Card title="Formulario de comics">
                            <View>  
                                <Form
                                    ref="form"
                                    type={Comic}
                                    options={options}
                                    value={comic}
                                    onChange={(v) => this.onChange(v)}
                                    />
                            </View>
                            <AppButton
                                bgColor="rgb(255, 38, 74)"
                                title= "Dar de alta"
                                action= {this.save.bind(this)}
                                iconName= "plus"
                                iconSize={30}
                                iconColor="#fff"
                            />
                        </Card>
                    </View>              
                </BackgroundImage>
            </ScrollView>
                
            )
        }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(231, 228, 224, 0.8)',
        padding: 1,
        paddingVertical: 10

        
    }
});
