import React, {Component} from 'react';
import {View,StyleSheet,TouchableOpacity,Text,Image,Dimensions} from 'react-native';
import {withNavigation} from 'react-navigation';

class LoginButtons extends Component {
    render(){
        return(
            <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.FacebookButton}
            >
                <Image style={styles.fbIcon} source={require('../../Assets/FaceLogin.png')}/>
                <Text style={styles.fbButtonText}> 
                   Continue with Facebook
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.GoogleButton}
            >
                <Image style={styles.fbIcon} source={require('../../Assets/GoogleLogin.png')}/>
                <Text style={styles.gButtonText}> 
                   Continue with Google
                </Text>
            </TouchableOpacity>

            <Text style={styles.or}>or</Text>
            
            <TouchableOpacity
              style={styles.JoinButton}
              onPress={() => this.props.navigation.navigate('Login')}
            >
                <Text style={styles.joinButtonText}> 
                   Join/Sign-in with Email
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
const styles = StyleSheet.create({
    buttonContainer: {
        display:'flex',
        alignSelf: 'center',
        paddingHorizontal: 10,
        width: wdth * 0.7,
        marginTop: 10,
        justifyContent: 'space-between',
    },
    FacebookButton: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-around',
        alignItems:'center',
        alignSelf: 'center',
        backgroundColor: '#3B5998',
        height: hght * 0.07,
        width: wdth * 0.7,
        marginVertical: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#3B5998',
    },
    fbButtonText:{
        color:'white',
        fontSize: fontSizer(wdth)+2,
    },
    GoogleButton:{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-around',
        alignItems:'center',
        alignSelf: 'center',
        backgroundColor: '#DDDDDD',
        height: hght * 0.07,
        width: wdth * 0.7,
        marginVertical: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#DDDDDD'
    },
    gButtonText:{
        color: 'black',
        fontSize: fontSizer(wdth)+2,
    },
    JoinButton:{
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#35465c',
        height: hght * 0.07,
        width: wdth * 0.7,
        marginVertical: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#35465c'
    },
    joinButtonText:{
        color:'white',
        fontSize: fontSizer(wdth)+2,
    },
    or:{
        alignSelf: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        width: wdth * 0.75,
        marginVertical: 5,
        fontSize: fontSizer(wdth),
        color: 'white',
    }

  })

export default withNavigation(LoginButtons);