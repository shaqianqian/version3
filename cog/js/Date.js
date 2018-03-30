import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View ,Button,ScrollView,NetInfo} from 'react-native';
//import App from './App';
import {
    StackNavigator,
} from 'react-navigation';


export default class Date extends React.Component {

    static navigationOptions = {
        title: 'Date',
    };

    render() {

        return (
            <ScrollView style={{margin:16,borderColor:'black', flex: 1, flexDirection: 'column'}}>

                <Text style={styles.text}>
                    Extended deadlines
                </Text>
                <Text style={styles.text_c}>

                    Submission site opens: April 1st, 2018{'\n'}
                    Full paper submission deadline: June 1st, 2018{'\n'}
                    Acceptance notification: July 15th, 2018{'\n'}
                    Camera-ready: September 15th, 2018{'\n'}
                    Workshop: October 29- 31st , 2018
                </Text>

            </ScrollView>
        );
    }





}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color:'#0066cc'

    },
    text_c: {
        paddingBottom:5,
        fontSize:13,
       textAlign: 'left'

    },


});







