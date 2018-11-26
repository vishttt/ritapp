import React, {Component} from 'react';
import {View,StyleSheet,Text,Dimensions,Image} from 'react-native';

class CompanyHeader extends Component{
    render(){
        return(
            <View style = {styles.backgroundCircle}>
                <Image style={styles.circlebackground} source= {require('../../Assets/Oval_BG.png')} />
                <Image style={styles.ritLogo} source = {require('../../Assets/RitLogoWhite_2x.png')} />
                <Text style={styles.welcomeSlogan}>Her şeyin bir puanı var... Sen de oyla!</Text>
                <Text style={styles.welcomeText}>Rit ile her şeye puan verebilir, arkadaşlarının ve {'\t'} diğer insanların düşüncelerini öğrenebilirsin...</Text>
            </View>
        )
    }
}
const wdth = Dimensions.get('window').width;
const hght = Dimensions.get('window').height;
const styles = StyleSheet.create({
    circlebackground :{
        position: 'absolute',
        width: wdth,
        height: hght * 0.55,
        marginTop: -(hght * 0.08),
    },
    backgroundCircle: {
        flex:1,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        height: hght * 0.5,
        width: wdth,
        backgroundColor: 'transparent',
        overflow:'hidden',
        marginBottom: 5,
    },
    ritLogo:{
        alignSelf: 'center',
        marginTop: 35,
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