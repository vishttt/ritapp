import React, {Component} from 'react';
import {View,StyleSheet,TouchableOpacity,Text,Dimensions,TextInput} from 'react-native';


class LoginForm extends Component {
    render(){
        return (
            <View style={styles.loginForm}>

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
                        <TouchableOpacity style={styles.loginButton}>
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
const styles = StyleSheet.create(
    {
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
            fontSize: fontSizer(wdth) + 2,
            fontWeight: '500',

        },
        forgotPasswordButton:{
            width: wdth * 0.7,
            justifyContent : 'flex-end',
        },
        forgotPasswordText:{
            textAlign:'center',
            color: 'white',
            fontSize: fontSizer(wdth),
        }
        

    }
)
export default LoginForm;