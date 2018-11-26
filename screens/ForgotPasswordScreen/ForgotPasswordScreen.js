import React, {Component} from 'react';
import {View,StyleSheet,Dimensions,Image,TextInput,Text,TouchableOpacity} from 'react-native';
import CompanyFooter from '../../components/CompanyFooter/CompanyFooter';

class ForgotPasswordScreen extends Component{
    constructor(){
        super();
        this.state = {
            clr: 'black',
            email: '',

        }
    }
    render(){
        return(
            <View style={styles.FPContainer}>
                <Image style={styles.FPHeader} source= {require('../../Assets/Signup_Header.png')}/>
                <View style={styles.FPForm}>
                    <Text style={styles.FPHeaderText}>Forgot Password?</Text>
                    <Text style={styles.FPText}>No worries. Just type in the registered email and{ '\t' } we'll send you a new temporary password.</Text>
                    <TextInput  style={styles.FPInput}
                                placeholder ='E-Mail'
                                onChangeText={(email) => this.setState({email})}
                                >
                    </TextInput>


                    <View style={styles.Buttons}>
                        <TouchableOpacity style={styles.FPButton}>
                            <Text style={styles.FPButtonText}>Continue</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.CancelButton}>
                            <Text style={styles.CancelButtonText}>Cancel</Text>
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
    FPContainer: {
        flex:1,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        width: wdth,
        height: hght,
        backgroundColor: '#fff',  
    },
    FPHeader: {
        justifyContent: 'flex-start',
        height: hght * 0.175,
        width: wdth,
        marginTop: -(hght * 0.05),
    },

    FPForm: {
        flex:1,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignSelf: 'center',
        width: wdth,
        position: 'relative',
        marginTop: hght * 0.075,

    },
    FPHeaderText:{
        textAlign: 'center',
        fontSize: 36,
        fontWeight: '400',
        color: '#51626b',
        marginBottom: 30,

    },
    FPText:{
        width: wdth * 0.9,
        alignSelf: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 17,
        fontWeight: '400',
        color:'#7e878c',
        marginBottom: 20,
    },
    FPInput:{
        width: wdth * 0.8,
        flexDirection: 'column',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 1,
        padding: 10,
        marginBottom: 10,
        fontSize: 22,
    },
    Buttons:{
        flex:1,
        width: wdth * 0.8,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        marginTop: 20,
        
    },
    FPButton:{
        height: 50,
        width: 125,
        backgroundColor: "#486270",
        justifyContent: 'center',
        borderRadius: 5,
        marginRight: 20,

    },
    FPButtonText :{
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
    CancelButtonText:{
        color: 'white',
        textAlign: 'center',
    },
    cFooter:{
        position: 'absolute',
        top:0,
    }

  })
export default ForgotPasswordScreen;