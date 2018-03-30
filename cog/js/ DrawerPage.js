import React, {Component} from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import Index from './Index';
import DrawerLeftPage from './DrawerLeftPage';
import {DrawerNavigator} from 'react-navigation';
const Drawer = DrawerNavigator(
    {
        Home:{
            path:'/',
            screen:Index,
        },
        Left:{
            path:'sent',
            screen:DrawerLeftPage
        }
    },
    {
        initialRouteName:"First"
        drawerPosition:'left',
    }
);

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});
export default DrawerPage;