import React, {Component} from 'react';
import {Text, View, StyleSheet} from "react-native";

export default class ComicEmpty extends Component {
    render () {
        const {text} = this.props;
        return(
            <View style={styles.comicEmptyView}>
                <Text style={styles.comicEmptyText}>
                     {text}
                </Text>
            </View>
        )
    }
}


const styles = StyleSheet.create ({
        comicEmptyView: {
            justifyContent: 'center',
            flex: 1,
            marginTop: 10,
            marginBottom: 10
        },
        comicEmptyText:{
            backgroundColor: 'rgba(34, 63, 206, 0.6)',
            color: 'white',
            textAlign: 'center',
            padding: 20
        }
});