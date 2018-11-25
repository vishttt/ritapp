import React, {Component} from 'react';
import {View,StyleSheet,Dimensions,Image,TextInput,Text,TouchableOpacity} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import CompanyFooter from '../../components/CompanyFooter/CompanyFooter';

let radio_props = [
    {label: 'Female  ', value: 0 },
    {label: 'Male  ', value: 1 }
  ];
class RegisterScreen extends Component{
    constructor(){
        super();
        this.state = {
            clr: 'black',
            username: '',
            email: '',
            birthday: '',
            value: 0,
        }
    }
    render(){
        return(
            <View style={styles.RegisterContainer}>
                <Image style={styles.SignupHeader} source= {require('../../Assets/Signup_Header.png')}/>
                <View style={styles.RegisterForm}>
                    <Text style={styles.RegisterHeader}>Sign-Up</Text>
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
                    <RadioForm
                        radio_props={radio_props}
                        initial={-1}
                        formHorizontal={true}
                        buttonColor={'#51626b'}
                        onPress={(value) => {this.setState({value:value})}}
                        animation={true}
                        style={styles.RadioBts}
                    />


                    <View style={styles.Buttons}>
                        <TouchableOpacity style={styles.RegisterButton}>
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
      alignItems: 'center',
      justifyContent: 'space-between',
      width: wdth,
      height: hght,
      backgroundColor: '#fff',
    },
    SignupHeader: {
        height: hght * 0.175,
        width: wdth,
        marginTop: -25,
    },

    RegisterForm: {
        width: wdth * 0.8,
        height: hght * 0.5,
    },
    RegisterHeader:{
        textAlign: 'left',
        fontSize: 24,
        fontWeight: '400',
        paddingLeft: 10,
        color: '#51626b',

    },
    RegisterInput:{
        width: wdth * 0.8,
        flexDirection: 'column',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 1,
        padding: 10,
        marginBottom: 10,
    },
    Buttons:{
        flex:1,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        marginTop: 20,
        
    },
    RegisterButton:{
        height: 50,
        width: 125,
        backgroundColor: "#486270",
        justifyContent: 'center',
        borderRadius: 5,
        marginRight: 20,
    },
    RegisterText :{
        color: 'white',
        textAlign: 'center',
    },
    CancelButton:{
        height: 50,
        width: 100,
        backgroundColor: "#7e878c",
        justifyContent: 'center',
        borderRadius: 5,
    },
    CancelText:{
        color: 'white',
        textAlign: 'center',
    },
    RadioBts:{
        marginTop: 15,
    }
  })
export default RegisterScreen;