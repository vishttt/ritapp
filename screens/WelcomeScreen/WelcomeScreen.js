import React, {Component} from 'react';
import {View,StyleSheet,Dimensions,ImageBackground} from 'react-native';
import LoginButtons from '../../components/LoginButtons/LoginButtons';
import CompanyFooter from '../../components/CompanyFooter/CompanyFooter';
import CompanyHeader from '../../components/CompanyHeader/CompanyHeader'

class WelcomeScreen extends Component{
    constructor(){
        super();
        this.state = {
            clr: 'white',
        }
    }
    render(){
        return(
            <ImageBackground source={require('../../Assets/MainBG.jpg')} style={{width: '100%', height: '100%'}}>
            <View style={styles.WelcomeContainer}>
                <CompanyHeader style={styles.cHeader}/>
                <LoginButtons style={styles.loginBt} />
                <CompanyFooter style={styles.cFooter} clr = {this.state.clr}/>
           </View>
           </ImageBackground>
        )
    }
}
const wdth = Dimensions.get('window').width;
const hght = Dimensions.get('window').height;
const styles = StyleSheet.create({
    WelcomeContainer: {
        flex:1,
        justifyContent:'space-between',
        width: wdth,
        height: hght
    },
    cFooter: {
        color: 'white'
    }
  })

export default WelcomeScreen;