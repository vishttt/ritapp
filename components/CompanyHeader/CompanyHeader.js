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
const fontSizer = (screenWidth) => {
    if(screenWidth > 400){
        return 16;
    }
    else if(screenWidth > 250){
        return 14;
    }
    else{
        return 12;
    }
}
const wdth = Dimensions.get('window').width;
const hght = Dimensions.get('window').height;
const styles = StyleSheet.create({
    circlebackground :{
        position: 'absolute',
        width: wdth,
        height: hght * 0.45,
        marginTop: -(hght * 0.05),
    },
    backgroundCircle: {
        display:'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        height: hght * 0.4,
        width: wdth,
        backgroundColor: 'transparent',
        overflow:'hidden',
        marginBottom: 5,
        alignSelf: 'flex-start',
    },
    ritLogo:{
        width: wdth * 0.35,
        height: wdth * 0.35,
        alignSelf: 'center',
        marginTop: hght * 0.05,
    },
    welcomeSlogan:{
        fontWeight: 'bold',
        fontSize: fontSizer(wdth) + 1 ,
        color: 'white',
        textAlign: 'center',
        marginTop: 5,
        alignSelf:'center',
    },
    welcomeText:{
        alignSelf : 'center',
        fontSize: fontSizer(wdth) - 3,
        color: 'white',
        width: wdth * 0.8,
        textAlign:'center',
    }
});

export default CompanyHeader;