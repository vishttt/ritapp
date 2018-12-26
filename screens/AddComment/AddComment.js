import React, {Component} from 'react';
import {View,StyleSheet,Dimensions,Image,TextInput,Text,TouchableOpacity} from 'react-native';


class AddComment extends Component{
    constructor(){
        super();
        this.state={
            search: ''
        }
    }
    render(){
        return(
            <View style={styles.addCommentContainer}>
                <View style={styles.addCommentHeader}>
                    <TouchableOpacity style={styles.backButton}>
                        <Text style={styles.backButtonIcon}> {'\<'} </Text>
                    </TouchableOpacity>
                    <Text style={styles.headerText}>MCK</Text>
                </View>

                <View style={styles.ritDetails}>
                    <View style={styles.ritText}>
                        <Text style={styles.txt}>You rated this 5 start 3 days ago.</Text>
                        <Text style={styles.txt}>Your friends gave 4.2 starts. Details</Text>
                        <Text style={styles.txt}>World average is 4.9, update your rating now!</Text>
                    </View>

                    <View style={styles.ritStars}>
                        <Image style={styles.star} source={require('../../Assets/Star-True.png')}/>
                        <Image style={styles.star} source={require('../../Assets/Star-True.png')}/>
                        <Image style={styles.star} source={require('../../Assets/Star-True.png')}/>
                        <Image style={styles.star} source={require('../../Assets/Star-True.png')}/>
                        <Image style={styles.star} source={require('../../Assets/Star-True.png')}/>
                    </View>

                    <View style={styles.ritVariants}>
                        <Text style={styles.variants}>|| See Insights</Text>
                        <Text style={styles.variants}>|| Compare</Text>
                        <Text style={styles.variants}>|| Share via...</Text>
                        <Text style={styles.variants}>|| Favourite</Text>
                    </View>

                </View>

                <View style={styles.detailsMenu}>
                    <TouchableOpacity style={styles.detailsBt}>
                        <Text style={styles.detailsTxt}>COMMENTS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.detailsBt}>
                        <Text style={styles.detailsTxt}>STATS</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.menuContent}>
                    <View style={styles.addComment}>
                        <TextInput  style={styles.commentInput}
                                    placeholder='Add a public comment (140 Characters)...'>

                        </TextInput>
                        <View style={styles.commentButtons}>
                            <TouchableOpacity style={styles.commentButton}>
                                <Text style={styles.commentBtTxt}>CANCEL</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.commentButton}>
                                <Text style={styles.commentBtTxt}>DONE</Text>
                            </TouchableOpacity>
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
    addCommentContainer:{
        flex:1,
        width: wdth,
        height: hght,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        backgroundColor: 'white',
    },
    addCommentHeader:{
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
    ritDetails:{
        width: wdth,
        height: hght * 0.4,
        display:'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'space-around',
        backgroundColor: '#dbdbdb',
    },
    ritText:{
        width: wdth,
        display:'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent:'center',
        alignSelf:'center',
    },
    txt:{
        textAlign: 'center',
        fontSize: fontSizer(wdth) - 2 ,
        justifyContent: 'center',
    },
    ritStars:{
        width: wdth * 0.7,
        display:'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent:'space-around',
        alignSelf:'center',

    },
    ritVariants:{
        width: wdth * 0.7,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignSelf: 'center',
    },
    variants:{
        width: wdth * 0.3,
        fontSize: fontSizer(wdth) - 1,
        marginBottom: 10,
        textAlign:'center'

    },
    detailsMenu:{
        width: wdth,
        height: hght * 0.1,
        backgroundColor: '#3B5998',
        display:'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent:'center',
    },
    detailsBt:{
        width: wdth * 0.5,
        justifyContent: 'center',
    },
    detailsTxt:{
        textAlign:'center',
        fontSize: fontSizer(wdth) - 2,
        color: 'white',
    },
    menuContent:{
        width: wdth,
        marginTop: 20,
        display:'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
    },
    addComment:{

    },
    commentInput:{
        width: wdth * 0.9,
        height: hght * 0.125,
        fontSize: fontSizer(wdth) - 2,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        alignSelf: 'center',
        marginBottom: 10,
    },
    commentButtons:{
        width: wdth* 0.9,
        display:'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent:'space-between',
        alignSelf:'center',
    },
    commentBtTxt:{
        textAlign:'center',
        color: '#3B5998',
        fontSize: fontSizer(wdth) - 2,
    }
    
});

export default AddComment;