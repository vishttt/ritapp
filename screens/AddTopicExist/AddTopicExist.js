import React, {Component} from 'react';
import {View,StyleSheet,Dimensions,Image,TextInput,Text,TouchableOpacity,Picker} from 'react-native';


class AddTopicExist extends Component{
    constructor(){
        super();
        this.state={
            search: ''
        }
    }
    render(){
        return(
            <View style={styles.addTopicExistContainer}>
                <View style={styles.addTopicExistHeader}>
                    <TouchableOpacity style={styles.backButton}>
                        <Text style={styles.backButtonIcon}> {'\<'} </Text>
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Add a Topic</Text>
                </View>

                <View style={styles.addTopicContainer}>
                    <View style={styles.addTopic}>
                        <Text style={styles.addTopicTxt}>
                        Name your topic and select a category
                        </Text>
                        <TextInput style={styles.topicName}
                                    placeholder='TopicName'
                        >

                        </TextInput>
                        <View style={styles.categoryPickerContainer}>
                            <Picker
                                selectedValue={'aaa'}
                                mode='dropdown'
                                style={styles.categoryPicker}
                                >
                                <Picker.Item style={styles.pickerItem} label="Movies" value="movies" />
                                <Picker.Item style={styles.pickerItem} label="Technology" value="tech" />
                            </Picker>
                        </View>
                        <TouchableOpacity style={styles.addButton}>
                            <Text style={styles.addButtonTxt}>Add</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={styles.informerTxtContainer}>
                    <Text style={styles.informerTxt}>Sorry</Text>
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
    addTopicExistContainer:{
        flex:1,
        width: wdth,
        height: hght,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        backgroundColor: 'white',
    },
    addTopicExistHeader:{
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
    addTopicContainer:{
        width: wdth,
        height: hght * 0.4,
        display:'flex',
        flexDirection: 'column',
        justifyContent : 'center',
        marginBottom:10,  
    },
    addTopic:{
        height: hght * 0.4,
        width: wdth,
        display:'flex',
        flexDirection: 'column',
        justifyContent:'space-around',
    },
    addTopicTxt:{
        fontSize: fontSizer(wdth) - 4,
        textAlign: 'center',
    },
    topicName:{
        width: wdth * 0.6,
        height: hght * 0.08,
        fontSize: fontSizer(wdth),
        backgroundColor:'#f7f7f7',
        borderWidth: 1,
        borderColor: '#f7f7f7',
        borderRadius:5,
        alignSelf:'center',
        alignItems:'center',
        textAlign:'center',
    },
    categoryPickerContainer:{
        width: wdth * 0.6,
        height: hght * 0.1,
        alignSelf:'center',
        backgroundColor:'#f7f7f7',
        borderWidth: 1,
        borderColor: '#f7f7f7',
        borderRadius: 5,
    },
    categoryPicker:{
        height: hght * 0.1,
        width: wdth * 0.6,
        alignSelf:'center',
        paddingLeft: 5,
    },
    addButton:{
        width: wdth * 0.25,
        height: hght * 0.075,
        backgroundColor: '#51626b',
        borderWidth: 1,
        borderRadius: 5,
        alignSelf:'center',
        justifyContent:'center',
    },
    addButtonTxt:{
        textAlign:'center',
        alignSelf:'center',
        color: 'white',
        fontSize: fontSizer(wdth) + 4,
    },
    informerTxtContainer:{
        width: wdth,
        height: hght * 0.125,
        backgroundColor: '#dbdbdb',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    informerTxt:{
        textAlign:'center',
        fontSize: fontSizer(wdth) - 2,

    },
    friendsContentList:{
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

export default AddTopicExist;