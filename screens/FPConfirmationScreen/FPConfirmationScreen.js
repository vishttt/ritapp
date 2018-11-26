import React, {Component} from 'react';
import {View,StyleSheet,Dimensions,Image,TextInput,Text,TouchableOpacity} from 'react-native';
import CompanyFooter from '../../components/CompanyFooter/CompanyFooter';

class FPConfirmationScreen extends Component{
    constructor(){
        super();
        this.state = {
            clr: 'black',
            email: '',

        }
    }
    render(){
        return(
            <View style={styles.fpcContainer}>
                <Image style={styles.fpcHeader} source= {require('../../Assets/Signup_Header.png')}/>
                <View style={styles.fpcDone}>
                    <Text style={styles.fpcHeaderText}>Done!</Text>
                    <Text style={styles.fpcText}>We have sent your new password to{ '\n' } rituser@gmail.com { '\n' } Please check your inbox</Text>
                    <View style={styles.Buttons}>
                        <TouchableOpacity style={styles.fpcButton}>
                            <Text style={styles.fpcButtonText}>Login Now</Text>
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
    fpcContainer: {
        flex:1,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        width: wdth,
        height: hght,
        backgroundColor: '#fff',  
    },
    fpcHeader: {
        justifyContent: 'flex-start',
        height: hght * 0.175,
        width: wdth,
        marginTop: -(hght * 0.05),
    },
    fpcDone: {
        flex:1,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignSelf: 'center',
        width: wdth,
        position: 'relative',
        marginBottom: hght * 0.1,

    },
    fpcHeaderText:{
        textAlign: 'center',
        fontSize: 36,
        fontWeight: '400',
        color: '#51626b',
        marginBottom: 30,

    },
    fpcText:{
        width: wdth * 0.9,
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '400',
        color:'#7e878c',
        marginBottom: 20,
    },

    Buttons:{
        width: wdth * 0.8,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        
    },
    fpcButton:{
        height: 50,
        width: 140,
        backgroundColor: "#486270",
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign:'center',
        justifyContent:'center',
        borderRadius: 5,

    },
    fpcButtonText :{
        color: 'white',
        textAlign: 'center',
        fontSize: 18,

    },
    cFooter:{
        position: 'absolute',
        top:0,
    }

  })
export default FPConfirmationScreen;