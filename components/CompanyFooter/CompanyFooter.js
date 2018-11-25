import React, {Component} from 'react';
import {View,StyleSheet,Text,Dimensions} from 'react-native';


class CompanyFooter extends Component{
    render(){
        return(
            <View style={styles.companyContainer}>
                <Text style={styles.copyRight}>(c) 2016 Rit Inc. Estonia, All Rights Reserved</Text>
                <Text style={styles.links}>
                    <Text style={styles.link}>About Rit</Text>
                    <Text> - </Text>
                    <Text style={styles.link}>Privacy Policy</Text>
                    <Text> - </Text>
                    <Text style={styles.link}>Terms of Service</Text>
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
        marginBottom: 40,
        color: 'white',
    },
    copyRight:{
        textAlign: 'center',
        fontSize: 16,
        color: 'white',
    },
    links:{
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        flexWrap: 'nowrap',
        textAlign:'center',
        color: 'white',
    },
    link:{
        textAlign: 'center',
        fontSize: 16,
        textDecorationLine: 'underline',
        color: 'white',
    }

});

export default CompanyFooter