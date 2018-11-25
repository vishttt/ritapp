import React, {Component} from 'react';
import {View,StyleSheet,Dimensions} from 'react-native';
import LoginButtons from '../../components/LoginButtons/LoginButtons';
import CompanyFooter from '../../components/CompanyFooter/CompanyFooter';
import CompanyHeader from '../../components/CompanyHeader/CompanyHeader'

class WelcomeScreen extends Component{
    render(){
        return(
            <View style={styles.WelcomeContainer}>
                <CompanyHeader style={styles.cHeader}/>
                <LoginButtons style={styles.loginBt} />
                <CompanyFooter style={styles.cFooter}/>
           </View>
        )
    }
}
const wdth = Dimensions.get('window').width;
const hght = Dimensions.get('window').height;
const styles = StyleSheet.create({
    WelcomeContainer: {
      alignItems: 'center',
      justifyContent:'space-between',
      width: wdth,
      height: hght
    },
  })

export default WelcomeScreen;