import React, {Component} from 'react';
import {View,StyleSheet,Text,Dimensions,Image} from 'react-native';

class CompanyHeader extends Component{
    render(){
        return(
            <View style = {styles.backgroundCircle}>
                <Image style={styles.ritLogo} source = {require('../../Assets/RitLogoWhite_2x.png')} />
                <Text style={styles.welcomeSlogan}>Her şeyin bir puanı var... Sen de oyla!</Text>
                <Text style={styles.welcomeText}>Rit ile her şeye puan verebilir, arkadaşlarının ve diğer insanların düşüncelerini öğrenebilirsin...</Text>
            </View>
        )
    }
}
const wdth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    backgroundCircle: {
        height: 275,
        width: wdth,
        backgroundColor: '#35465c',
        overflow:'hidden',
        justifyContent: 'flex-start',
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