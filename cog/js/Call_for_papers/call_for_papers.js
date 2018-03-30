import React, { Component } from 'react';
import {  AppRegistry, StyleSheet, Text, View, Button, ScrollView, Image, Dimensions, WebView,
    Linking} from 'react-native';
//import App from './App';
import {
    StackNavigator,
} from 'react-navigation';


export default class call_for_papers extends React.Component {

    static navigationOptions = {
        title: 'Call for papers',
    };

    render() {
        const uri = 'http://s683584806.onlinehome.fr/sample-page';
        return (
            <ScrollView style={{margin:16,borderColor:'black', flex: 1, flexDirection: 'column'}}>


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

