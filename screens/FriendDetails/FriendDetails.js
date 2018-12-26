import React, {Component} from 'react';
import {View,StyleSheet,Dimensions,Image,TextInput,Text,TouchableOpacity} from 'react-native';


class FriendDetails extends Component{
    constructor(){
        super();
        this.state={
            search: ''
        }
    }
    render(){
        return(
            <View style={styles.friendDetailsContainer}>
                <View style={styles.friendDetailsHeader}>
                    <TouchableOpacity style={styles.backButton}>
                        <Text style={styles.backButtonIcon}> {'\<'} </Text>
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Scarlett Johansson</Text>
                </View>

                <View style={styles.friendDetails}>
                    <View style={styles.profilePhotoContainer}>
                        <Image style={styles.profilePhoto} source={{uri: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE4MDAzNDEwNzkxOTI1MjYy/scarlett-johansson-13671719-1-402.jpg'}}/>
                        <Text style={styles.friendLevel}>Level 10</Text>
                    </View>
                    <View style={styles.friendMore}>
                        <Text style={styles.friendRits}>999 Rits</Text>
                        <Text style={styles.friendOwns}>Owns 25 Things</Text>
                    </View>
                </View>

                <View style={styles.friendRates}>
                    <View style={styles.friendRatesTable}>
                        <View style={styles.headerRow}>
                            <View style={styles.nameCol}>

                            </View>
                            <View style={styles.scoreCol}>
                                <Text style={styles.colHeader}>Overall Score</Text>    
                            </View>
                            <View style={styles.scoreCol}>
                                <Text style={styles.colHeader}>User Score</Text>
                            </View>
                            <View style={styles.ownerCol}>
                                
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.nameCol}>
                                <Text style={styles.rateName}>MCK</Text>
                            </View>
                            <View style={styles.scoreCol}>
                                <View style={styles.contentRateStars}>
                                    <Image style={styles.star} source={require('../../Assets/StarTrue0.5x.png')}/>
                                    <Image style={styles.star} source={require('../../Assets/StarTrue0.5x.png')}/>
                                    <Image style={styles.star} source={require('../../Assets/StarTrue0.5x.png')}/>
                                    <Image style={styles.star} source={require('../../Assets/StarTrue0.5x.png')}/>
                                    <Image style={styles.star} source={require('../../Assets/StarFalse0.5x.png')}/>
                                </View>        
                            </View>
                            <View style={styles.scoreCol}>
                                <View style={styles.contentRateStars}>
                                    <Image style={styles.star} source={require('../../Assets/StarTrue0.5x.png')}/>
                                    <Image style={styles.star} source={require('../../Assets/StarTrue0.5x.png')}/>
                                    <Image style={styles.star} source={require('../../Assets/StarFalse0.5x.png')}/>
                                    <Image style={styles.star} source={require('../../Assets/StarFalse0.5x.png')}/>
                                    <Image style={styles.star} source={require('../../Assets/StarFalse0.5x.png')}/>
                                </View>
                            </View>
                            <View style={styles.ownerCol}>
                                <Text style={styles.owner}>Owner</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.nameCol}>
                                <Text style={styles.rateName}>Game of Thrones</Text>
                            </View>
                            <View style={styles.scoreCol}>
                                <View style={styles.contentRateStars}>
                                    <Image style={styles.star} source={require('../../Assets/StarTrue0.5x.png')}/>
                                    <Image style={styles.star} source={require('../../Assets/StarTrue0.5x.png')}/>
                                    <Image style={styles.star} source={require('../../Assets/StarFalse0.5x.png')}/>
                                    <Image style={styles.star} source={require('../../Assets/StarFalse0.5x.png')}/>
                                    <Image style={styles.star} source={require('../../Assets/StarFalse0.5x.png')}/>
                                </View>
                            </View>
                            <View style={styles.scoreCol}>
                                <View style={styles.contentRateStars}>
                                    <Image style={styles.star} source={require('../../Assets/StarTrue0.5x.png')}/>
                                    <Image style={styles.star} source={require('../../Assets/StarTrue0.5x.png')}/>
                                    <Image style={styles.star} source={require('../../Assets/StarTrue0.5x.png')}/>
                                    <Image style={styles.star} source={require('../../Assets/StarTrue0.5x.png')}/>
                                    <Image style={styles.star} source={require('../../Assets/StarFalse0.5x.png')}/>
                                </View>      
                            </View>
                            <View style={styles.ownerCol}>

                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.friendAddButtons}>
                    <TouchableOpacity style={styles.addBt}>
                        <Text style={styles.addBtText}>X IGNORE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addBt}>
                        <Text style={styles.addBtText}>ADD TO FRIENDS</Text>
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
    friendDetailsContainer:{
        flex:1,
        width: wdth,
        height: hght,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        backgroundColor: 'white',
    },
    friendDetailsHeader:{
        display: 'flex',
        width: wdth,
        height: hght * 0.08,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        backgroundColor: '#51626b',
        color: 'white',
        overflow: 'hidden',
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
    friendDetails:{
        width: wdth,
        height: hght * 0.15,
        display:'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        backgroundColor: '#dbdbdb',

    },
    profilePhotoContainer:{
        width: wdth * 0.325,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        marginLeft: 20,
    },
    profilePhoto:{
        width: hght * 0.09,
        height: hght * 0.09,
        alignSelf:'center',
        borderRadius: 50,
    },
    friendLevel:{
        marginRight: 5,
        backgroundColor:'#51626b',
        color:'white',
        padding: 3,
        marginTop: 3,
        borderRadius: 5,
        fontSize: fontSizer(wdth) - 6,
        textAlign:'center',
        alignItems:'center',
        width: wdth * 0.125,
    },
    friendMore:{
        marginRight: 20,
        alignSelf:'center',
        alignItems:'flex-end'
    },
    friendRates:{
        display: 'flex',
        flex:1,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
    },
    friendRatesTable:{
        width: wdth * 0.95,
        display:'flex',
        flexDirection: 'column',
        alignSelf:'center',
    },
    headerRow:{
        display:'flex',
        width: wdth* 0.95,
        height: hght * 0.05,
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingVertical: 5,
    },
    row:{
        display:'flex',
        width: wdth* 0.95,
        height: hght * 0.05,
        flexDirection: 'row',
        justifyContent:'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#f7f7f7',
        paddingVertical: 5,
    },
    colHeader:{
        alignSelf:'center',
        textAlign:'center',
        fontSize: fontSizer(wdth) - 6,
    },
    nameCol:{
        display:'flex',
        width: wdth * 0.3,
        alignItems:'flex-end',
        justifyContent:'center',
    },
    scoreCol:{
        display:'flex',
        width: wdth * 0.25,
        flexDirection:'column',
        justifyContent:'flex-end'
    },
    ownerCol:{
        display:'flex',
        width: wdth* 0.1,
        flexDirection: 'column',
        justifyContent:'center',

    },
    contentRateStars:{
        display:'flex',
        width: wdth*0.2,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent:'space-around',
        alignSelf:'center',
        marginBottom: 5,
    },
    star:{
        width: wdth * 0.025,
        height: wdth * 0.025,
    },
    owner:{
        fontSize: fontSizer(wdth) - 8,
        backgroundColor: '#51626b',
        color:'white',
        borderRadius: 2,
        width: wdth * 0.08,
        height: wdth * 0.04,
        textAlign:'center',
        alignSelf: 'center',
    },
    friendAddButtons:{
        width: wdth,
        height: hght * 0.1,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        alignSelf:'flex-end',
    },
    addBt:{
        width: wdth * 0.45,
        alignItems:'center',
    },
    addBtText:{
        textAlign :'center',
        fontSize: fontSizer(wdth) - 2,

    }
    
});

export default FriendDetails;