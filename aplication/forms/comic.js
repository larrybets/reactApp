import React, {Component} from 'react';
import t from 'tcomb-form-native';
const Form = t.form.Form;
import sliderTemplate from './templates/slider';

export const Comic = t.struct({
    name: t.String,
    editorial: t.String,
    price: t.Number,
    description: t.String,
    note: t.Number


});

export const options = {
    fields:{
        name:{
            label: 'Nombre (*)',
            placeholder: 'Nombre',
        },
        address: {
            label: 'Dirección (*)',
            placeholder: 'Dirección'
        },
        note:{
            label: 'Nota',
            placeholder:'Nota',
            config:{
                step: 1,
                min: 1,
                max: 10
            },

            sliderTemplate
        },
        description:{
            label: 'Descripcion (*)',
            placeholder: 'Descripción',
            multiline: true,
            stylesheet: {
                ...Form.stylesheet,
                textbox:{
                    ...Form.stylesheet.textbox,
                    normal:{
                        ...Form.stylesheet.textbox.normal,
                        height: 100
                    },
                    error: {
                        ...Form.stylesheet.textbox.error,
                        height: 100
                    }
                }

            }
        },
        price:{
            label: 'Precio',
            placeholder: 'Precio'
        }
    }
};