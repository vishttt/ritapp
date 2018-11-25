import React, {Component} from 'react';
import {View,StyleSheet,Text,Dimensions,Image} from 'react-native';

class CompanyHeader extends Component{
    render(){
        return(
            <View style = {styles.backgroundCircle}>
                <Image style={styles.circlebackground} source= {require('../../Assets/Oval_BG.png')} />
                <Image style={styles.ritLogo} source = {require('../../Assets/RitLogoWhite_2x.png')} />
                <Text style={styles.welcomeSlogan}>Her şeyin bir puanı var... Sen de oyla!</Text>
                <Text style={styles.welcomeText}>Rit ile her şeye puan verebilir, arkadaşlarının ve diğer insanların düşüncelerini öğrenebilirsin...</Text>
            </View>
        )
    }
}
const wdth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    circlebackground :{
        position: 'absolute',
        width: wdth,
        height: 365,
        marginTop: -55,
    },
    backgroundCircle: {
        height: 315,
        width: wdth,
        backgroundColor: 'transparent',
        overflow:'hidden',
        justifyContent: 'flex-start',
        marginBottom: 5,
    },
    ritLogo:{
        alignSelf: 'center',
        marginTop: 25,
    },
    welcomeSlogan:{
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        marginTop: 5
    },
    welcomeText:{
        alignSelf : 'center',
        fontSize: 16,
        color: 'white',
        width: wdth * 0.8,
    }
});

export default CompanyHeader;