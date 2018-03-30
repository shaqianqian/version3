import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View ,Button,ScrollView,Dimensions} from 'react-native';
//import App from './App';
import {
    StackNavigator,
} from 'react-navigation';
import { MenuProvider } from 'react-native-popup-menu';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';


export default class program extends React.Component  {
    static navigationOptions = {
        title: 'program',
    };


    render() {

        return (
    
          
            <ScrollView style={{margin:16,borderColor:'black', flex: 1, flexDirection: 'column'}}>
                        <MenuProvider >  
  <View style={styles.menu}>
                <Menu>
              <MenuTrigger text='List' />
             <MenuOptions>
              <MenuOption onSelect={() => this.props.navigation.navigate('Introduction')} text='Introduction' />
              <MenuOption onSelect={() => this.props.navigation.navigate('Submission')} text='Submission' />
              <MenuOption onSelect={() => this.props.navigation.navigate('venue')} text='venue' />
               <MenuOption onSelect={() => this.props.navigation.navigate('contact')} text='contact' />
              <MenuOption onSelect={() => this.props.navigation.navigate('call_for_papers')} text='call_for_papers' />
              <MenuOption onSelect={() => this.props.navigation.navigate('program')} text='program' />
               <MenuOption onSelect={() => this.props.navigation.navigate('registration')} text='registration' />
               <MenuOption onSelect={() => this.props.navigation.navigate('sponsor')} text='sponsor' />
             </MenuOptions>
              </Menu>
          </View>

             <View>
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
 </View>
       </MenuProvider >  

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


  menu: {
       
        width: Dimensions.get('window').width, height: 15,



    } ,
});


