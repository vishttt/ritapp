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
const wdth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    companyContainer:{
        alignSelf: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        width: wdth * 0.75,
    },
    copyRight:{
        textAlign: 'center',
        fontSize: 16,
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
        fontSize: 16,
        textDecorationLine: 'underline',
    }

});

export default CompanyFooter