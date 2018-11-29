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
    fpcContainer: {
        flex:1,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        width: wdth,
        height: hght,
        backgroundColor: '#fff',  
        justifyContent: 'space-between',
    },
    fpcHeader: {
        display:'flex',
        justifyContent: 'flex-start',
        height: hght * 0.175,
        width: wdth,
        marginTop: -(hght * 0.05),
    },
    fpcDone: {
        display:'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignSelf: 'center',
        width: wdth,
        marginBottom: hght * 0.1,

    },
    fpcHeaderText:{
        textAlign: 'center',
        fontSize: fontSizer(wdth) * 2,
        fontWeight: '400',
        color: '#51626b',
        marginBottom: 30,

    },
    fpcText:{
        width: wdth * 0.9,
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: fontSizer(wdth),
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
        height: wdth * 0.1,
        maxHeight: 50,
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
        fontSize: fontSizer(wdth),

    },
    cFooter:{
        display:'flex',
        alignSelf:'flex-end',
    }

  })
export default FPConfirmationScreen;