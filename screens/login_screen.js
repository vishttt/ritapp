import React from 'react';
import {Text, View, TextInput, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import CompanyFooter from '../components/CompanyFooter/CompanyFooter';

export default class LoginScreen extends React.Component {
    render () {
        return (
            <ImageBackground source={require('../Assets/MainBG.jpg')} style={{width: '100%', height: '100%'}}>
            <View style={styles.container}>
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder="e-mail"
                            onChangeText={(text) => this.setState({text})}
                        />
                        
                        <View style={styles.passwordLoginContainer}>
                            <TextInput
                                style={[styles.input, { flex: 1 }]}
                                placeholder="password"
                                onChangeText={(text) => this.setState({text})}
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

                    <CompanyFooter/>
            </View>
            </ImageBackground>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 60,
    },
    input: {
        alignSelf: 'stretch',
        backgroundColor: 'white',
        height: 45,
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 0.8,
        padding: 10
    },
    passwordLoginContainer: {
        flexDirection: 'row',
        marginTop: 15
    },
    loginButton: {
        height: 43,
        width: 75,
        marginLeft: 10,
        backgroundColor: "#486270",
        justifyContent: 'center',
        borderRadius: 5
    },
    loginText: {
        color: 'white',
        textAlign: 'center',
    },
    signupButton: {
        marginTop: 50,
        padding: 10,
        height: 50,
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 4,
        justifyContent: 'center',
    },
    signupText: {
        color: 'white',
        fontWeight: '900',
        textAlign: 'center',
        fontSize: 17
    },
    forgotPasswordButton: {
        marginTop: 50,
        alignSelf: 'center'
    },
    forgotPasswordText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '700'
    }
});