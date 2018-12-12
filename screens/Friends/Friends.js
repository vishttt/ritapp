import React, {Component} from 'react';
import {View,StyleSheet,Dimensions,Image,TextInput,Text,TouchableOpacity} from 'react-native';


class HomeScreen extends Component{
    constructor(){
        super();
        this.state={
            search: ''
        }
    }
    render(){
        return(
            <View style={styles.homeContainer}>
                <View style={styles.homeHeader}>
                    <View style={styles.searchBar}>
                        <Image style={styles.ritLogo} source = {require('../../Assets/RitLogoWhite_2x.png')} />
                        <TextInput  style={styles.homeSearch}
                                    placeholder ='Find things to rate..'
                                    onChangeText={(search) => this.setState({search})}
                                    >
                        </TextInput>
                        <Image style={styles.mapLogo} source={require('../../Assets/MapIcon2x.png')}></Image>
                    </View>

                    <View style={styles.headerMenu}>
                        <TouchableOpacity   style={styles.bttn}
                        >
                            <Text style={styles.txt}>Nearby</Text>
                        </TouchableOpacity>
                        <TouchableOpacity   style={styles.bttn}
                        >
                            <Text style={styles.txt}>My Topics</Text>
                        </TouchableOpacity>
                        <TouchableOpacity   style={[styles.bttn,{borderBottomColor: 'yellow',borderBottomWidth: 2}]}
                        >
                            <Text style={styles.txt}>Friends</Text>
                        </TouchableOpacity>
                        <TouchableOpacity   style={styles.dots}
                        >
                            <Text style={styles.txt}>|</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.blueMenu}>
                    <TouchableOpacity style={styles.blueBtn}>
                        <Text style={styles.bMtxt}>Our Suggestions></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.blueBtn}>
                        <Text style={styles.bMtxt}>|| Add/Invite</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.friendsContentList}>
                <View style={styles.friendsContent}>
                        <View style={styles.profilePhotoContainer}>
                            <Image style={styles.profilePhoto} source={{uri: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE4MDAzNDEwNzkxOTI1MjYy/scarlett-johansson-13671719-1-402.jpg'}}/>
                        </View>
                        <View style={styles.friendInfo}>
                            <Text style={styles.friendName}>Scarlett Johansson</Text>
                            <View style={styles.friendRatings}>
                                <Text style={styles.friendRatingsText}>MCK</Text>
                                <Text style={styles.friendRatingsText}>iPhone X+</Text>
                            </View>
                        </View>
                        <View style={styles.friendLevelContainer}>
                            <Text style={styles.friendLevel}>Level 10</Text>
                            <Text style={styles.friendRits}>999 Rits</Text>
                        </View>
                    </View>
                    <View style={styles.friendsContent}>
                        <View style={styles.profilePhotoContainer}>
                            <Image style={styles.profilePhoto} source={{uri: 'https://iasbh.tmgrup.com.tr/5de7ae/0/0/0/0/0/0?u=https://isbh.tmgrup.com.tr/sb/album/2018/04/16/ajdar-anikin-son-hali-ajdar-anik-simdi-ne-yapiyor-1523870075590.jpg&mw=752&mh=700'}}/>
                        </View>
                        <View style={styles.friendInfo}>
                            <Text style={styles.friendName}>Ajdar Anık</Text>
                            <View style={styles.friendRatings}>
                                <Text style={styles.friendRatingsText}>O Ses Türkiye</Text>
                                <Text style={styles.friendRatingsText}>Eurovision</Text>
                            </View>
                        </View>
                        <View style={styles.friendLevelContainer}>
                            <Text style={styles.friendLevel}>Level 1</Text>
                            <Text style={styles.friendRits}>12 Rits</Text>
                        </View>
                    </View>
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
    homeContainer:{
        flex:1,
        width: wdth,
        height: hght,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        backgroundColor: 'white',
    },
    homeHeader:{
        display: 'flex',
        width: wdth,
        height: hght * 0.2,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        backgroundColor: '#51626b',
        color: 'white',
        overflow: 'hidden',
        justifyContent: 'space-between',
        paddingTop: 10,
    },
    searchBar:{
        display:'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-around',
        color: '#7e878c',
    },
    searchIcon:{
        position: 'absolute',
        left: 5,
        justifyContent: 'center',
    },
    ritLogo:{
        width: wdth * 0.13,
        height: wdth * 0.13,
        alignSelf: 'center',
    },
    homeSearch:{
        width: wdth * 0.7,
        backgroundColor: 'white',
        color: '#7e878c',
        borderRadius: 5,
        alignSelf: 'center',
        fontSize: fontSizer(wdth),
        padding: 15,
        height: wdth * 0.13,
    },
    mapLogo:{
        width: wdth* 0.1,
        height: wdth * 0.1,
        alignSelf: 'center',
    },
    headerMenu:{
        display:'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',  
    },
    bttn:{
        width: wdth * 0.3,
        alignItems: 'center',
        paddingBottom: 15,
    },
    dots:{
        width: wdth * 0.1,
        alignItems:'center'
    },
    txt:{
        color:'white',
        fontSize: fontSizer(wdth),
        fontWeight: '400',
    },
    blueMenu:{
        backgroundColor: '#cbd9ef',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 1,
        height: hght * 0.09,
    },
    bMtxt:{
        fontSize: fontSizer(wdth),
        textAlign: 'center',
    },
    friendsContentList:{
        flex:1,
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
    },
    friendsContent:{
        width: wdth,
        height: hght * 0.12,
        borderBottomColor: '#7e878c',
        borderBottomWidth: 1,
        display:'flex',
        flexDirection:'row',
        flexWrap:'nowrap',
        paddingTop: 10,
        justifyContent: 'space-between',
    },
    profilePhotoContainer:{
        width: wdth * 0.25,
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems: 'center',
    },
    profilePhoto:{
        width: hght * 0.09,
        height: hght * 0.09,
        alignSelf:'center',
        borderRadius: 50,
    },
    friendInfo:{
        width: wdth * 0.5,
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'flex-start',
    },
    friendName:{
        fontSize: fontSizer(wdth) + 2,
        color: '#51626b',
        fontWeight: '500',
    },
    friendRatings:{
        display:'flex',
        flexDirection:'row',
        flexWrap: 'nowrap',
        justifyContent:'flex-start',
    },
    friendRatingsText:{
        paddingLeft: 5,
        fontSize: fontSizer(wdth) - 2,
        fontWeight: '500',
    },
    friendLevelContainer:{
        width: wdth * 0.25,
        display:'flex',
        flexDirection: 'column',
        justifyContent:'flex-start',
        alignItems: 'flex-end',
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
    friendRits:{
        fontSize: fontSizer(wdth) - 6,
        textAlign:'center',
        marginTop: 3,
        padding: 3,
        marginRight: 5,
    }
    
});

export default HomeScreen;