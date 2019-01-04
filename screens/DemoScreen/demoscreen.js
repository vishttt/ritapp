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
                <TouchableOpacity   style={styles.bttn}
                                    onPress={() => this.props.navigation.navigate('Home')}
                >
                    <Text style={styles.txt}>HomeScreen</Text>
                </TouchableOpacity>
                <TouchableOpacity   style={styles.bttn}
                                    onPress={() => this.props.navigation.navigate('Friends')}
                >
                    <Text style={styles.txt}>Friends</Text>
                </TouchableOpacity>
                <TouchableOpacity   style={styles.bttn}
                                    onPress={() => this.props.navigation.navigate('AddInvite')}
                >
                    <Text style={styles.txt}>AddInvite</Text>
                </TouchableOpacity>
                <TouchableOpacity   style={styles.bttn}
                                    onPress={() => this.props.navigation.navigate('AddComment')}
                >
                    <Text style={styles.txt}>AddComment</Text>
                </TouchableOpacity>
                <TouchableOpacity   style={styles.bttn}
                                    onPress={() => this.props.navigation.navigate('FriendDetails')}
                >
                    <Text style={styles.txt}>FriendDetails</Text>
                </TouchableOpacity>
                <TouchableOpacity   style={styles.bttn}
                                    onPress={() => this.props.navigation.navigate('AddTopicExist')}
                >
                    <Text style={styles.txt}>AddTopicExist</Text>
                </TouchableOpacity>
                <TouchableOpacity   style={styles.bttn}
                                    onPress={() => this.props.navigation.navigate('TopicAddOk')}
                >
                    <Text style={styles.txt}>TopicAddOk</Text>
                </TouchableOpacity>
                <TouchableOpacity   style={styles.bttn}
                                    onPress={() => this.props.navigation.navigate('Compare')}
                >
                    <Text style={styles.txt}>Compare</Text>
                </TouchableOpacity>
                <TouchableOpacity   style={styles.bttn}
                                    onPress={() => this.props.navigation.navigate('InfoPopup')}
                >
                    <Text style={styles.txt}>InfoPopup</Text>
                </TouchableOpacity>
                <TouchableOpacity   style={styles.bttn}
                                    onPress={() => this.props.navigation.navigate('MapSearch')}
                >
                    <Text style={styles.txt}>MapSearch</Text>
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