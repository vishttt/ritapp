import React, {Component} from 'react';
import {View,StyleSheet,TouchableOpacity,Text,Image,Dimensions} from 'react-native';

class LoginButtons extends Component{
    render(){
        return(
            <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.FacebookButton}
            >
                <Text style={styles.fbButtonText}> 
                   Continue with Facebook
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.GoogleButton}
            >
                <Text style={styles.gButtonText}> 
                   Continue with Google
                </Text>
            </TouchableOpacity>

            <Text style={styles.or}>or</Text>
            
            <TouchableOpacity
              style={styles.JoinButton}
            >
                <Text style={styles.joinButtonText}> 
                   Join/Sign-in with Email
                </Text>
            </TouchableOpacity>
           </View>
        )
    }
}
const wdth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    buttonContainer: {
      alignSelf: 'center',
      justifyContent: 'center',
      paddingHorizontal: 10,
      width: wdth * 0.75,
    },
    FacebookButton: {
      display:'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#3B5998',
      height: 50,
      width: wdth * 0.75,
      marginVertical: 5,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#3B5998'
    },
    fbButtonText:{
        color:'white',
        fontSize: 18,
    },
    GoogleButton:{
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DDDDDD',
        height: 50,
        width: wdth * 0.75,
        marginVertical: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#DDDDDD'
    },
    gButtonText:{
        color: 'black',
        fontSize: 18
    },
    JoinButton:{
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#35465c',
        height: 50,
        width: wdth * 0.75,
        marginVertical: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#35465c'
    },
    joinButtonText:{
        color:'white',
        fontSize: 18
    },
    or:{
        textAlign: 'center',
        justifyContent: 'center',
        width: wdth * 0.75,
        marginVertical: 5,
        fontSize: 18
    }

  })

export default LoginButtons;