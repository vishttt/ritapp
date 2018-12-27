import React, {Component} from 'react';
import {View,StyleSheet,Dimensions,Image,TextInput,Text,TouchableOpacity,Picker} from 'react-native';


class TopicAddOk extends Component{
    constructor(){
        super();
        this.state={
            search: ''
        }
    }
    render(){
        return(
            <View style={styles.addTopicOkContainer}>
                <View style={styles.addTopicOkHeader}>
                    <TouchableOpacity style={styles.backButton}>
                        <Text style={styles.backButtonIcon}> {'\<'} </Text>
                    </TouchableOpacity>
                    <Text style={styles.headerText}>MCK</Text>
                </View>

                <View style={styles.addOkContainer}>
                    <View style={styles.addOk}>
                        <Text style={styles.addOkTxt}>
                        Awesome job! You have just created
                        </Text>
                        <Text style={styles.addName}>
                            MCK
                        </Text>
                    </View>
                    <View style={styles.rateContainer}>
                        <Text style={styles.rateText}>
                            Now be the first to rate...
                        </Text>
                        <View style={styles.ritStars}>
                            <Image style={styles.star} source={require('../../Assets/Star-True.png')}/>
                            <Image style={styles.star} source={require('../../Assets/Star-True.png')}/>
                            <Image style={styles.star} source={require('../../Assets/Star-True.png')}/>
                            <Image style={styles.star} source={require('../../Assets/Star-True.png')}/>
                            <Image style={styles.star} source={require('../../Assets/Star-False.png')}/>
                        </View>
                        <TextInput  style={styles.commentInput}
                                    placeholder='Add a public comment (140 Characters)...'>
                            
                        </TextInput>
                    </View>
                </View>
                <View style={styles.shareContainer}>
                    <Text style={styles.shareText}>Share your brand new Rit!</Text>
                    <View style={styles.shareIcons}>
                        <TouchableOpacity style={styles.shareIcon}>
                            <Image style={styles.mapLogo} source={require('../../Assets/TwitterShare.png')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.shareIcon}>
                            <Image style={styles.mapLogo} source={require('../../Assets/FacebookShare.png')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.shareIcon}>
                            <Image style={styles.mapLogo} source={require('../../Assets/TextShare.png')}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.doneButtonContainer}>
                    <TouchableOpacity style={styles.doneButton}>
                            <Text style={styles.doneButtonTxt}>Done</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        )
    }
}

const fontSizer = (screenWidth) => {
    if(screenWidth > 400){
        return 18;
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
    addTopicOkContainer:{
        flex:1,
        width: wdth,
        height: hght,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        backgroundColor: 'white',
        overflow: 'hidden',
    },
    addTopicOkHeader:{
        display: 'flex',
        width: wdth,
        height: hght * 0.1,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        backgroundColor: '#51626b',
        color: 'white',
        justifyContent:'flex-start',
        alignItems:'center',
    },
    backButton:{
        marginHorizontal: 10,
    },
    backButtonIcon:{
        fontSize: fontSizer(wdth) + 10,
        color:'white',
        fontWeight: '600',
    },
    headerText:{
        fontSize: fontSizer(wdth) + 2,
        color: 'white',
    },
    addOkContainer:{
        width: wdth,
        height: hght * 0.55,
        display:'flex',
        flexDirection: 'column',
        justifyContent : 'space-around',
        marginBottom:10,  
    },
    addOk:{
        height: hght * 0.075,
        width: wdth,
        display:'flex',
        flexDirection: 'column',
        justifyContent:'flex-start',
    },
    addOkTxt:{
        fontSize: fontSizer(wdth) - 2,
        textAlign: 'center',
    },
    addName:{
        textAlign:'center',
        fontSize: fontSizer(wdth) + 6,
    },
    rateContainer:{
        height: hght * 0.3,
        display:'flex',
        flexDirection: 'column',
        justifyContent:'space-between',
        alignSelf:'center',
    },
    rateText:{
        textAlign:'center',
        fontSize: fontSizer(wdth) - 2,
    },
    ritStars:{
        width: wdth * 0.7,
        display:'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent:'space-around',
        alignSelf:'center',
    },
    commentInput:{
        width: wdth * 0.9,
        height: hght * 0.125,
        alignSelf:'center',
        borderWidth: 1,
        borderRadius:5,
        borderColor: '#dbdbdb',
        backgroundColor: '#f7f7f7',
        textAlignVertical: 'top',
        paddingLeft: 10,
        fontSize: fontSizer(wdth),
    },
    shareContainer:{
        height: hght * 0.15,
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        alignSelf:'center',
        alignItems:'center',
    },
    shareText:{
        textAlign: 'center',
        fontSize: fontSizer(wdth) - 2,
    },
    shareIcons:{
        width: wdth * 0.5,
        display:'flex',
        flexDirection: 'row',
        justifyContent:'space-around',
        alignSelf:'center',
    },
    doneButtonContainer:{
        justifyContent:'flex-end',
        height: hght * 0.1,
    },
    doneButton:{
        width: wdth * 0.25,
        height: hght * 0.075,
        backgroundColor: '#51626b',
        borderWidth: 1,
        borderRadius: 5,
        alignSelf:'center',
        justifyContent:'center',
    },
    doneButtonTxt:{
        textAlign:'center',
        alignSelf:'center',
        color: 'white',
        fontSize: fontSizer(wdth) + 4,
    },

    
});

export default TopicAddOk;