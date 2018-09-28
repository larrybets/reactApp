import React from 'react';
import ComicsScreen from "../screens/Comics/Comics";
import { createStackNavigator, createDrawerNavigator} from 'react-navigation';


import Icon from 'react-native-vector-icons/FontAwesome';


const navigationOptions = {
    navigationOptions: {
        headerStyle: {
            backgroundColor: 'rgba(200, 38, 74, 1)',
        },
        headerTitleStyle:{
            textAlign: 'center',
            alignSelf: 'center',
            fontSize: 20,
            color: '#fff',
            fontWeight: 'bold'
        }
    }
};

const leftIcon = (navigation, icon) => <Icon    
     name={icon}
     style={{marginLeft: 20}}
     size={20}
     color="white"
     onPress={() => navigation.openDrawer()}     />; //<-- el onPress no me funciona.


                                                                                
const rightIcon = (navigation, icon) => <Icon    
                                            name={icon}
                                            style={{marginLeft: 20}}
                                            size={30}
                                            color="white"
                                            onPress={()=> navigation.navigate('ListComics')} 
                                                                                              />;


const comicsScreenStack = createStackNavigator (
    {
        ListComics:{
            screen: ComicsScreen,
            navigationOptions: ({navigation}) => ({
                    title: 'Comics',
                    headerLeft: leftIcon(navigation, 'bars')
            })
        }
    },
    navigationOptions
);


export default createDrawerNavigator(
    {
        ComicsScreen:{
            screen: comicsScreenStack,
            navigationOptions: ({navigation}) => ({
                drawerLabel: 'tuputamadre',
            drawerIcon: ({tintColor}) => (<Icon name="home" size={24} style={{ color: tintColor}} />), 
            })
            
        }
    },
    {
        drawerBackgroundColor: 'rgba(100, 35, 100, 0.7)',
        contentOptions:{
            activeTintColor: 'white',
            activeBackgroundColor: 'transparent',
            inactiveTintColor: 'white',
            itemsContainerStyle:{
                marginVertical: 0,
            }
        },
    }
) 

/**export default createDrawerNavigator (
        {
            screen: comicsScreenStack,
            navigationOptions: ({ navigation }) => ({
                drawerLabel: 'Prueba',
                drawerIcon: ({tintColor}) => (<Icon name="home" size={24} style={{ color: tintColor}} />), 

            }) 
        },

)*/

