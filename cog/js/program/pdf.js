import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Button, ScrollView, WebView, Linking, Dimensions,NetInfo} from 'react-native';
//import App from './App';
import {
    StackNavigator,
} from 'react-navigation';


class pdf extends React.Component {
    static navigationOptions = {
        title: 'The ICEASSM 2017 ',
    };

    render() {

        const uri = 'http://iceassm.org/Downloads/ICEASSM2017_program.pdf';
       // http://cogestion.apps-1and1.net/category/conference
        return (
            <WebView
                ref={(ref) => { this.webview = ref; }}
                source={{ uri } }
                style={{height:Dimensions.get('window').height,weight:Dimensions.get('window').width}}
                onNavigationStateChange={(event) => {
                    if (event.url !== uri) {

                        this.webview.stopLoading();
                        Linking.openURL(event.url);
                    }
                }}
            />
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
    text_r: {
        paddingBottom:5,
        fontSize:15,
        color:'red',
        textAlign: 'left',
    },



});

export default pdf;
