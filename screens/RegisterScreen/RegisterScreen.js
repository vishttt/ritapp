import utils from '../../utils';
import React, {Component} from 'react';
import {View,StyleSheet,Dimensions,Image,TextInput,Text,TouchableOpacity, Alert} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import CompanyFooter from '../../components/CompanyFooter/CompanyFooter';

let radioProps = [
    {label: 'Female  ', value: 'F' },
    {label: 'Male  ', value: 'M' }
  ];
class RegisterScreen extends Component{
    constructor(){
        super();
        this.state = {
            clr: '#35465c',
            username: '',
            email: '',
            birthday: '',
            gender: 'M',
            errors: []
        }
    }

    onPressRegisterButton = () => {
        let endpoint = global.baseApiUrl + 'register';
        let response = fetch(endpoint, {
            method: 'POST',
            body: JSON.stringify({
                username: this.state.username,
                email: this.state.email,
                birth_date: this.state.birthday,
                gender: this.state.gender
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            if(responseJson.hasOwnProperty("error")){
                return this.setState({
                    errors: responseJson.error.message.split(";")
                });
            }

            Alert.alert("Registered!!", "Your password is sent to your email", [
                {
                    text: 'OK', 
                    onPress: () => this.props.navigation.navigate('Login')
                },
              ],
            );
        })
        .catch((error) => {
            this.setState({
                errors: ['Could not registered. Please try again later.']
            })
        });
    
        
    }

    render(){
        return(
            <View style={styles.RegisterContainer}>
                <Image style={styles.SignupHeader} source= {require('../../Assets/Signup_Header.png')}/>
                <View style={styles.RegisterForm}>
                    <Text style={styles.RegisterHeader}>Sign-Up</Text>
                    {this.state.errors.map(msg => <Text key={msg}>{msg}</Text>)} 
                    <TextInput  style={styles.RegisterInput}
                                placeholder ='Username'
                                onChangeText={(username) => this.setState({username})}
                                >
                    </TextInput>
                    <TextInput  style={styles.RegisterInput}
                                placeholder ='E-Mail'
                                onChangeText={(email) => this.setState({email})}
                                >
                    </TextInput>
                    <TextInput  style={styles.RegisterInput}
                                placeholder ='Birthday'
                                onChangeText={(birthday) => this.setState({birthday})}
                                >
                    </TextInput>
                    <View style={styles.radioButtons}>
                        <RadioForm
                            radio_props={radioProps}
                            initial={-1}
                            formHorizontal={true}
                            buttonColor={'#51626b'}
                            onPress={(value) => {this.setState({gender:value})}}
                            animation={true}
                            buttonSize={15}
                            buttonWrapStyle={{marginLeft: 10}}

                        />
                    </View>


                    <View style={styles.Buttons}>
                        <TouchableOpacity onPress={this.onPressRegisterButton} style={styles.RegisterButton}>
                            <Text style={styles.RegisterText}>Sign me up!</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.CancelButton}>
                            <Text style={styles.CancelText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <CompanyFooter style={styles.cFooter} clr = {this.state.clr}/>
           </View>
        )
    }
}

const wdth = Dimensions.get('window').width;
const hght = Dimensions.get('window').height;
const styles = StyleSheet.create({
    RegisterContainer: {
      flex:1,
      flexDirection: 'column',
      flexWrap: 'nowrap',
      backgroundColor: '#fff',
      justifyContent : "space-between",
    },
    SignupHeader: {
        display:'flex',
        justifyContent: 'center',
        alignSelf:'flex-start',
        height: hght * 0.175,
        width: wdth,
        marginTop: -(hght * 0.05),
    },

    RegisterForm: {
        display:'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        alignSelf: 'center',
        width: wdth,
        height: hght * 0.5,

    },
    RegisterHeader:{
        width: wdth * 0.7,
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: utils.fontSizer(wdth) * 2,
        fontWeight: '400',
        color: '#51626b',
        paddingLeft: 15,
        textAlign:'left',

    },
    RegisterInput:{
        display:'flex',
        width: wdth * 0.7,
        flexDirection: 'column',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 1,
        padding: 10,
        marginBottom: 10,
        fontSize: utils.fontSizer(wdth),
    },
    Buttons:{
        display:'flex',
        width: wdth * 0.7,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        marginTop: 20,
        alignSelf: 'center'
        
    },
    RegisterButton:{
        height: wdth * 0.1,
        width: 100,
        backgroundColor: "#486270",
        justifyContent: 'center',
        borderRadius: 5,
        marginRight: 15,
    },
    RegisterText :{
        color: 'white',
        textAlign: 'center',
    },
    CancelButton:{
        height: wdth * 0.1,
        maxHeight: 50,
        width: 100,
        backgroundColor: "#7e878c",
        justifyContent: 'center',
        borderRadius: 5,
        alignSelf: 'center',
    },
    CancelText:{
        color: 'white',
        textAlign: 'center',
    },
    radioButtons:{
        width: wdth * 0.7,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 15,
    },
    cFooter:{
        alignSelf: 'flex-end',
    }
  })
export default RegisterScreen;