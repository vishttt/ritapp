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
                <View style={styles.cFooter}>
                    <CompanyFooter clr = {this.state.clr}/>
                </View>
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
    FPContainer: {
        flex:1,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        width: wdth,
        height: hght,
        backgroundColor: '#fff',  
        justifyContent : 'space-between',
    },
    FPHeader: {
        display:'flex',
        justifyContent: 'flex-start',
        height: hght * 0.175,
        width: wdth,
        marginTop: -(hght * 0.05),
    },

    FPForm: {
        display:'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignSelf: 'center',
        width: wdth,
        position: 'relative',

    },
    FPHeaderText:{
        textAlign: 'center',
        fontSize: fontSizer(wdth) * 2,
        fontWeight: '400',
        color: '#51626b',
        marginBottom: 30,

    },
    FPText:{
        width: wdth * 0.9,
        alignSelf: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize:fontSizer(wdth),
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
        fontSize: fontSizer(wdth),
    },
    Buttons:{
        display:'flex',
        width: wdth * 0.8,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        marginTop: 20,
        alignSelf: 'center',
        
    },
    FPButton:{
        height: wdth * 0.1,
        maxHeight: 50,
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
        height: wdth * 0.1,
        maxHeight: 50,
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
        display:'flex',
    }

  })
export default ForgotPasswordScreen;