import React from 'react';
import {Text, View, TextInput, StyleSheet, TouchableOpacity, ImageBackground,Dimensions} from 'react-native';
import CompanyFooter from '../../components/CompanyFooter/CompanyFooter';
import CompanyHeader from '../../components/CompanyHeader/CompanyHeader';
import LoginForm from '../../components/LoginForm/LoginForm'

export default class LoginScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            clr: 'white',
            email: '',
            password: '',
        }
    }
    render () {
        return (
            <ImageBackground style={styles.loginBg} source={require('../../Assets/MainBG.jpg')} style={{width: '100%', height: '100%'}}>
            <View style={styles.loginContainer}>
                    <CompanyHeader style={ styles.cHeader} />
                    <LoginForm style={ styles.lForm}/>
                    <CompanyFooter style = {styles.cFooter} clr = {this.state.clr}/>
            </View>
            </ImageBackground>
            
        )
    }
}
const wdth = Dimensions.get('window').width;
const hght = Dimensions.get('window').height;
const styles = StyleSheet.create({
    loginBg:{
        flex: 1,
        height: hght,
        alignSelf: 'center',
        position:'absolute',
    },
    loginContainer:{
        flex:1,
        flexDirection :'column',
        justifyContent:'space-between',
    },
    cHeader: {
        alignSelf: 'flex-start',
    },
    lForm: {
        alignSelf: 'center',
    },
    cFooter:{
        alignSelf: 'flex-end',
    }
});