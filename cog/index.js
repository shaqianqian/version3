import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View ,Button,Image, ScrollView,ImageBackground,Dimensions} from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';

export default class Intex extends React.Component{
  constructor(props){
    super(props);

  }
      static navigationOptions = {
        title: 'Index',
        drawerLabel:'购物车',
    };

    render() {
        return (


           <View  style={{flex: 1, flexDirection: 'row',
               justifyContent: 'flex-start'}}>
       <View>
           

            <Text style={styles.bt}

                     onPress={() =>
                    this.props.navigation.navigate('Introduction')

                     } >Home


            </Text>
           
           </View>
         </View>


      );
    }
}


const styles = StyleSheet.create({
    bt: {
        backgroundColor:'#6699cc',
        alignItems: 'center',
        textAlign:'center',
        justifyContent: 'center',
        borderColor: '#495A80',
        borderWidth:1,
        fontSize: 20,
        paddingTop:40,
        borderRadius: 5,
        margin: 5,
        width: Dimensions.get('window').width/2-10, height: 100,
        padding: 10
        
        
    } ,



});

