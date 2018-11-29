import React, {Component} from 'react';
import {View,StyleSheet,Text,Dimensions} from 'react-native';


class CompanyFooter extends Component{

    render(){
        return(
            <View style={styles.companyContainer}>
                <Text style={[styles.copyRight,{color:this.props.clr}]} >(c) 2016 Rit Inc. Estonia, All Rights Reserved</Text>
                <Text style={[styles.links,{color:this.props.clr}]}>
                    <Text style={[styles.link,{color:this.props.clr}]} >About Rit</Text>
                    <Text> - </Text>
                    <Text style={[styles.link,{color:this.props.clr}]}>Privacy Policy</Text>
                    <Text> - </Text>
                    <Text style={[styles.link,{color:this.props.clr}]}>Terms of Service</Text>
                </Text>
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
    companyContainer:{
        display:'flex',
        alignSelf: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 15,
        width: wdth * 0.75,
        height: hght * 0.2,
    },
    copyRight:{
        textAlign: 'center',
        fontSize: fontSizer(wdth) - 1,
    },
    links:{
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        flexWrap: 'nowrap',
        textAlign:'center',
    },
    link:{
        textAlign: 'center',
        fontSize: fontSizer(wdth) - 1,
        textDecorationLine: 'underline',
    }

});

export default CompanyFooter