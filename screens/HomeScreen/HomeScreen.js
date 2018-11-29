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
                        <TouchableOpacity   style={[styles.bttn,{borderBottomColor: 'yellow',borderBottomWidth: 2}]}
                        >
                            <Text style={styles.txt}>Nearby</Text>
                        </TouchableOpacity>
                        <TouchableOpacity   style={styles.bttn}
                        >
                            <Text style={styles.txt}>My Topics</Text>
                        </TouchableOpacity>
                        <TouchableOpacity   style={styles.bttn}
                        >
                            <Text style={styles.txt}>Friends</Text>
                        </TouchableOpacity>
                        <TouchableOpacity   style={styles.dots}
                        >
                            <Text style={styles.txt}>|</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.homeContentContainer}>
                    <View style={styles.homeContent}>
                        <View style={styles.contentRate}>
                            <Text style={styles.contentRateScore}>
                                4.2
                            </Text>
                            <View style={styles.contentRateStars}>
                                <Image style={styles.star} source={require('../../Assets/StarTrue0.5x.png')}/>
                                <Image style={styles.star} source={require('../../Assets/StarTrue0.5x.png')}/>
                                <Image style={styles.star} source={require('../../Assets/StarTrue0.5x.png')}/>
                                <Image style={styles.star} source={require('../../Assets/StarTrue0.5x.png')}/>
                                <Image style={styles.star} source={require('../../Assets/StarFalse0.5x.png')}/>
                            </View>
                            <Text style={styles.contentRatePopulation}>
                                6.512.255
                            </Text>
                        </View>
                        <View style={styles.contentInfo}>
                            <Text style={styles.contentName}>Ryzen</Text>
                            <Text style={styles.userRateHistory}>You rated 5 stars...</Text>

                        </View>
                    </View>
                    <View style={styles.homeContent}>
                        <View style={styles.contentRate}>
                            <Text style={[styles.contentRateScore,{color: 'red'}]}>
                                1.1
                            </Text>
                            <View style={styles.contentRateStars}>
                                <Image style={styles.star} source={require('../../Assets/StarTrue0.5x.png')}/>
                                <Image style={styles.star} source={require('../../Assets/StarFalse0.5x.png')}/>
                                <Image style={styles.star} source={require('../../Assets/StarFalse0.5x.png')}/>
                                <Image style={styles.star} source={require('../../Assets/StarFalse0.5x.png')}/>
                                <Image style={styles.star} source={require('../../Assets/StarFalse0.5x.png')}/>
                            </View>
                            <Text style={styles.contentRatePopulation}>
                                9.987.165
                            </Text>
                        </View>
                        <View style={styles.contentInfo}>
                            <Text style={styles.contentName}>Intel</Text>
                            <Text style={styles.userRateHistory}>You haven't rated this yet...</Text>

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
    homeContentContainer:{
        flex:1,
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
    },
    homeContent:{
        width: wdth,
        height: hght * 0.12,
        borderBottomColor: '#7e878c',
        borderBottomWidth: 1,
        display:'flex',
        flexDirection:'row',
        flexWrap:'nowrap',
        paddingTop: 10,
    },
    contentRate:{
        width: wdth * 0.25,
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems: 'center',
    },
    contentRateScore:{
        color: 'orange',
        fontSize: fontSizer(wdth) + 4,
        fontWeight: '600',
    },
    contentRateStars:{
        display:'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent:'space-between',
    },
    star:{
        width: wdth * 0.03,
        height: wdth * 0.03,
    },
    contentRatePopulation:{
        fontSize: fontSizer(wdth) - 4,
    },
    contentInfo:{
        width: wdth * 0.75,
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'flex-start',
    },
    contentName:{
        fontSize: fontSizer(wdth) + 4,
        color: '#51626b',
        fontWeight: '500',
    },
    userRateHistory:{
        fontSize: fontSizer(wdth),
        color: '#7e878c',
    }
});

export default HomeScreen;