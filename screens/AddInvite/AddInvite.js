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
            <View style={styles.addInviteContainer}>
                <View style={styles.addInviteHeader}>
                    <TouchableOpacity style={styles.backButton}>
                        <Text style={styles.backButtonIcon}> {'\<'} </Text>
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Find & Invite Friends</Text>
                </View>

                <View style={styles.searchFriend}>
                    <TextInput  style={styles.search}
                                        placeholder ='Name or e-mail...'
                                        onChangeText={(search) => this.setState({search})}
                                        >
                    </TextInput>
                    <TouchableOpacity style={styles.searchIcon}>
                        <Text style={styles.searchIconText}>%</Text>
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

                <View style={styles.inviteInfoContainer}>
                    <Text style={styles.inviteQuestion}>Your friends is not on Rit?</Text>
                    <Text style={styles.inviteInfo}>Invite Friends from Phone Contacts</Text>
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
    addInviteContainer:{
        flex:1,
        width: wdth,
        height: hght,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        backgroundColor: 'white',
    },
    addInviteHeader:{
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
    searchFriend:{
        width: wdth,
        height: hght * 0.12,
        display:'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        backgroundColor: '#dbdbdb',

    },
    search:{
        width: wdth* 0.65,
        height: hght * 0.08,
        backgroundColor: 'white',
        borderRadius: 5,
        alignSelf:'center',
        paddingLeft: 15,
        borderTopRightRadius: 0,
        borderBottomRightRadius:0,
    },
    searchIcon:{
        width: wdth * 0.15,
        height: hght * 0.08,
        backgroundColor: 'white',
        borderRadius: 5,
        alignSelf:'center',
        borderTopLeftRadius: 0,
        borderBottomLeftRadius:0,
        textAlign:'right',
        justifyContent:'center',

    },
    searchIconText:{
        fontSize: fontSizer(wdth) + 4,
        textAlign:'right',
        alignSelf:'center',

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
    },
    inviteInfoContainer:{
        height: hght * 0.125,
        backgroundColor: '#ededed',
        justifyContent:'center',
    },
    inviteQuestion:{
        fontSize: fontSizer(wdth) + 2,
        textAlign: 'center',
    },
    inviteInfo:{
        fontSize: fontSizer(wdth),
        textAlign: 'center',
    }
    
});

export default HomeScreen;