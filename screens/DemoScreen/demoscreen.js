import React, {Component} from 'react';
import {View,StyleSheet,Dimensions,TouchableOpacity,Text} from 'react-native';


class demoscreen extends Component{

    render(){
        return(
            <View style={styles.cont}>
                <TouchableOpacity   style={styles.bttn}
                                    onPress={() => this.props.navigation.navigate('Welcome')}
                >
                    <Text style={styles.txt}>WelcomePage</Text>
                </TouchableOpacity>
                <TouchableOpacity   style={styles.bttn}
                                    onPress={() => this.props.navigation.navigate('Login')}
                >
                    <Text style={styles.txt}>LoginPage</Text>
                </TouchableOpacity>
                <TouchableOpacity   style={styles.bttn}
                                    onPress={() => this.props.navigation.navigate('Register')}
                >
                    <Text style={styles.txt}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity   style={styles.bttn}
                                    onPress={() => this.props.navigation.navigate('ForgotPassword')}
                >
                    <Text style={styles.txt}>ForgotPassword</Text>
                </TouchableOpacity>
                <TouchableOpacity   style={styles.bttn}
                                    onPress={() => this.props.navigation.navigate('FPConfirmation')}
                >
                    <Text style={styles.txt}>FPConfirmation</Text>
                </TouchableOpacity>
           </View>
        )
    }
}
const wdth = Dimensions.get('window').width;
const hght = Dimensions.get('window').height;
const styles = StyleSheet.create({
    cont:{
        flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    bttn: {
        width: 150,
        height: 50,
        backgroundColor: 'grey',
        padding: 5,
    },
    txt:{
        textAlign: 'center',
        color: 'white',
        justifyContent: 'center',
        padding: 5,
    }
  })

export default demoscreen;