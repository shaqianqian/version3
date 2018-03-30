import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View ,Button,ScrollView} from 'react-native';
//import App from './App';
import {
    StackNavigator,
} from 'react-navigation';

export default class program extends React.Component  {
    static navigationOptions = {
        title: 'program',
    };


    render() {

        return (
            <ScrollView style={{margin:16,borderColor:'black', flex: 1, flexDirection: 'column'}}>


                <Text style={styles.text}>
                    Journée 1: 29 octobre 2018: {'\n'}Possibilité de biotransformation à partir des produits agricoles?
                </Text>
                    <Text style={styles.text_c}>
                    Matin:  08h30 – 10h00 et de 10h30 – 12h00

                    08h30 – 10h30: Conférence inaugurale{'\n'}

                    10h00 – 10h30: PAUSE Café ou Thé{'\n'}

                    10h30 – 12h00: Ateliers et exposés oraux{'\n'}

                    12h00 – 13h45: Déjeuner{'\n'}

                    Après Midi: 13h45 – 15h30 et 16h30 – 18h00{'\n'}

                    13h45: 14h45: Conférence:{'\n'}

                    14h45 – 15h45: Ateliers et exposé oraux{'\n'}

                    15h45 – 16h15: PAUSE Café ou Thé{'\n'}

                    16h15 – 17h45: Ateliers et exposés oraux

                    </Text>
                        <Text style={styles.text}>
                    Journée 2: 30 octobre 2018: {'\n'}Etat des lieux en Afrique?
                        </Text>
                        <Text style={styles.text_c}>

                    Matin: 8h30 – 10h00 et de 10h30 – 12h00
                    08h30: 10h30: Conférence{'\n'}

                    10h00 – 10h30: PAUSE Café ou Thé{'\n'}

                    10h30 – 12h00: Ateliers et exposés oraux{'\n'}

                    12h00 – 13h45: Déjeuner{'\n'}

                    Après Midi: 13h45 – 15h30 et 16h30 – 18h00{'\n'}

                    13h45 – 16h30 Restitution et Visites de sites{'\n'}

                    18h00 – 21h00 Dîner de gala

                        </Text>
                            <Text style={styles.text}>
                    Journée 3: 31 octobre 2018
                            </Text>
                            <Text style={styles.text_c}>

                    Matin: 8h30 – 10h00 et de 10h30 – 12h00
                    08h30: 10h30: Conférence{'\n'}

                    10h00 – 10h30: PAUSE Café ou Thé
                                {'\n'}
                    10h30 – 12h00: Ateliers et exposés oraux{'\n'}

                    12h00 – 13h45: Déjeuner{'\n'}

                    Après Midi: 13h45 – 15h30 et 16h30 – 18h00{'\n'}

                    13h45: 14h45: Conférence:{'\n'}

                    14h45 – 15h45: Ateliers et exposé oraux{'\n'}

                    15h45 – 16h15: PAUSE Café ou Thé
                                {'\n'}
                    16h15 – 17h45: Ateliers et exposés oraux
                </Text>

                {/*<Text style={styles.text_c}>*/}
                    {/*The programm is available*/}

                {/*</Text>*/}
                {/*<Text style={styles.text_r}*/}

                          {/*onPress={() =>*/}
                          {/*navigation.navigate('pdf')*/}


                      {/*} >here*/}
                {/*</Text>*/}


            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        textAlign: 'left',
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


