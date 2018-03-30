import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View ,Button,ScrollView,NetInfo, Dimensions,} from 'react-native';
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


export default class Introduction extends React.Component {

    static navigationOptions = {
        title: 'Introduction',
    };
  
    render() {

        return (

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
            <ScrollView style={{margin:16,borderColor:'black', flex: 1, flexDirection: 'column'}}>
                <Text style={styles.text}>29th – 31st October, 2018
                    Abidjan, CÔTE D’IVOIRE</Text>
                <Text style={styles.text_c}>
                    World population growth is a reality recognized by many organizations, including the United Nations. In the case of Africa,
                    they predicted that the population would double by 2050, with a huge proportion of people displaced to urban cities.
                    This demographic surge is generating a significant increase in energy demands. In addition, African economic development
                    is in a phase where the need for energy is enormous in order to achieve the vision of an emerging and prosperous economy.
                    Energy needs in social activities put strong pressure on forests where trees are cut for domestic heating. Another environmental
                    problem related to population growth is the large amount of waste produced and the energy potential of waste recovery. Insufficient
                    energy production leads to small cuts in African countries. Real efforts by scientists, engineers and experts will be needed to address
                    these strategic challenges and help boost the continent’s development efforts. The workshop on the challenges of environmental transformation
                    for renewable energies (CENTER’2018) will be held from 29 to 31 October 2018 in Abidjan, Ivory Coast and will be hosted by the University
                    Felix Houphouet Boigny (UFHB) . This workshop invites advanced scientific contributions that could provide a better
                    understanding of the issues and propose innovative solutions. The workshop offers a wide range of topics for communications,
                    posters and tutorials on issues related to bio-sourced energies, transformation processes, wind and photovoltaic energy, micro-grid solutions,
                    transformation environment and health. It also invites tutorials on methods of analysis, modeling and simulation.
                    {'\n'}{'\n'}
                    CENTER’2018 will provide participants from around the world with opportunities to exchange knowledge,
                    experiences, innovative ideas about their various practices and, hopefully, to launch collaborative projects.
                    In addition, the workshop provides an excellent opportunity for delegates to explore synergies for networking
                    and future research / grant applications and for commercial purposes.

                </Text>
            </ScrollView>
             </MenuProvider>
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
         menu: {
       backgroundColor:'#ffffff',
        width: Dimensions.get('window').width, height: 25,



    } ,


});

