import React, {Component} from 'react';
import t from 'tcomb-form-native';
const Form = t.form.Form;
import sliderTemplate from './templates/slider';

export const Comic = t.struct({
    name: t.String,
    editorial: t.String,
    price: t.Number,
    note: t.Number,
    description: t.description

});

export const options = {
    fields:{
        name:{
            label: 'Nombre (*)',
            placeHolder: 'Nombre',
        },
        address: {
            label: 'Dirección (*)',
            placeHolder: 'Dirección'
        },
        note:{
            label: 'Nota',
            placeHolder:'Nota',
            config:{
                step: 1,
                min: 1,
                max: 10
            },

            sliderTemplate
        },
        description:{
            label: 'Descripcion (*)',
            placeHolder: 'Descripción',
            multiline: true,
            stylesheet: {
                ...Form.stylesheet,
                textBox:{
                    ...Form.stylesheet.textBox,
                    normal:{
                        ...Form.stylesheet.textBox.normal,
                        height: 150
                    },
                    error: {
                        ...Form.stylesheet.textBox.error,
                        height: 150
                    }
                }

            }
        },
        price:{
            label: 'Precio',
            placeHolder: 'Precio'
        }
    }
};