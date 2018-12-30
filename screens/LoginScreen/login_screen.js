import utils from '../../utils';
import React from 'react';
import {Text, View, TextInput, StyleSheet, TouchableOpacity, ImageBackground,Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import CompanyFooter from '../../components/CompanyFooter/CompanyFooter';
import CompanyHeader from '../../components/CompanyHeader/CompanyHeader';

export default class LoginScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            clr: 'white',
            email: '',
            password: '',
            errors: []
        }
    }

    onPressLoginButton = () => {
        let endpoint = global.baseApiUrl + 'login';
        let response = fetch(endpoint, {
            method: 'POST',
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                device_uuid: DeviceInfo.getUniqueID()
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            if(responseJson.hasOwnProperty("error")){
                return this.setState({
                    errors: responseJson.error.message.split(";")
                });
            }

            this.props.navigation.navigate('Home');
        })
        .catch((error) => {
            this.setState({
                errors: ['Could not login. Please try again later.']
            })
        });
    }

    render () {
        return (
            <ImageBackground style={styles.loginBg} source={require('../../Assets/MainBG.jpg')} style={{width: '100%', height: '100%'}}>
            <View style={styles.loginContainer}>
                <CompanyHeader style={ styles.cHeader} />
                <View style={styles.loginForm}>
                    {this.state.errors.map(msg => <Text key={msg}>{msg}</Text>)} 
                    <View style={styles.login}>
                        <TextInput
                            style={styles.emailInput}
                            placeholder="e-mail"
                            onChangeText={(email) => this.setState({email})}
                        />
                        
                        <View style={styles.passwordLoginContainer}>
                            <TextInput
                                style={styles.passwordInput}
                                placeholder="Password"
                                onChangeText={(password) => this.setState({password})}
                            />
                            <TouchableOpacity style={styles.loginButton} onPress={this.onPressLoginButton}>
                                <Text style={styles.loginText}>Log in</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.signupButton}>
                        <Text style={styles.signupText}>Create New Account</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.forgotPasswordButton}>
                        <Text style={styles.forgotPasswordText}>
                            Forgot Password?
                        </Text>
                    </TouchableOpacity>

                </View>
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
    },
    loginForm:{
        display:'flex',
        alignSelf: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        width: wdth * 0.75,
        height: hght * 0.325,
        marginTop: 10,
    },
    login:{
        display:'flex',
        alignSelf: 'flex-start',
        justifyContent:'space-between',
        height: hght * 0.14,
    },
    emailInput:{
        justifyContent: 'flex-start',
        alignSelf:'center',
        width: wdth * 0.7,
        backgroundColor: 'white',
        borderRadius: 5,
        paddingLeft: 15,
        height: wdth * 0.1,
        maxHeight: 50,

    },
    passwordLoginContainer:{
        display:'flex',
        width: wdth * 0.7,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
    },
    passwordInput:{
        alignSelf:'flex-start',
        alignItems:'center',
        justifyContent: 'center',
        width: wdth * 0.45,
        height: wdth * 0.1,
        maxHeight: 50,
        paddingLeft: 5,
        borderRadius:5,
        backgroundColor: 'white',
        paddingLeft: 15,
    },
    loginButton:{
        alignSelf: 'flex-end',
        alignItems:'center',
        justifyContent: 'center',
        width: wdth* 0.225,
        height: wdth * 0.1,
        maxHeight: 50,
        borderRadius:5,
        backgroundColor: '#35465c',
    },
    loginText:{
        textAlign:'center',
        color: 'white',
        
    },
    signupButton:{
        width: wdth * 0.7,
        borderRadius: 10,
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: 'white',
        height: wdth * 0.11,
        maxHeight: 50,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    signupText:{
        textAlign:'center',
        color: 'white',
        fontSize: utils.fontSizer(wdth) + 2,
        fontWeight: '500',

    },
    forgotPasswordButton:{
        width: wdth * 0.7,
        justifyContent : 'flex-end',
    },
    forgotPasswordText:{
        textAlign:'center',
        color: 'white',
        fontSize: utils.fontSizer(wdth),
    }
});