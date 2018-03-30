import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View ,Button,Image, ScrollView,ImageBackground,Dimensions,TouchableOpacity} from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';




export default class Intex extends React.Component{
  constructor(props){
    super(props);

  }
      static navigationOptions = {
        title: 'Index',
    };

    render() {
        return (
           

           <View  style={{flex: 1, flexDirection: 'row',backgroundColor:'#ffffff',
               justifyContent: 'flex-start', }}>
              
            <View >
           

            <Text style={styles.bt}

                     onPress={() =>
                    this.props.navigation.navigate('Introduction')

                     } >Home


            </Text>
             <Text style={styles.bt}

                 onPress={() =>
                     this.props.navigation.navigate('Date')
                 } >Important dates
           </Text>
            <Text style={styles.bt}

                 onPress={() =>
                    this.props.navigation.navigate('Submission')
                 } >Submission
           </Text>
              

               <Text style={styles.bt}

                 onPress={() =>
                      this.props.navigation.navigate('venue')

                 } >Venue</Text>
              
            <Text style={styles.bt}

                 onPress={() =>
                    this.props.navigation.navigate('contact')
                 } >Contact
           </Text>
           
           </View>
       <View>

               <Text style={styles.bt}

                 onPress={() =>
                      this.props.navigation.navigate('call_for_papers')
                 } >Call_for_papers
           </Text>

               <Text style={styles.bt}

                 onPress={() =>
                      this.props.navigation.navigate('program')
                 } >program
           </Text>
                
                  <Text style={styles.bt}

                 onPress={() =>
                      this.props.navigation.navigate('program')
                 } >program
           </Text>
                

                 <Text style={styles.bt}

                 onPress={() =>
                      this.props.navigation.navigate('registration')
                 } >Registration
           </Text>

                <Text style={styles.bt}

                 onPress={() =>
                      this.props.navigation.navigate('sponsor')
                 } >Sponsors
           </Text>
            
       </View>



          </View>


      );
    }
}


const styles = StyleSheet.create({
    bt: {
       // backgroundColor:'#6699cc',
        color:'#6699cc',
        alignItems: 'center',
        textAlign:'center',
        justifyContent: 'center',
        borderColor: '#495A80',
        borderWidth:5,
        borderStyle:'solid',
        fontSize: 20,
        paddingTop:40,
        borderRadius: 25,
        margin: 3,
        width: Dimensions.get('window').width/2-10, height: 105,
        padding: 10, 




    } ,


});

