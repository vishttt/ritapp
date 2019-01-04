import React, {Component} from 'react';
import {View,StyleSheet,Dimensions,TextInput,Text,TouchableOpacity,Image} from 'react-native';


class MapSearch extends Component{
    constructor(){
        super();
        this.state={
            search: ''
        }
    }
    render(){

        return(
            <View style={styles.mapSearchContainer}>
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <TouchableOpacity style={styles.backButton}>
                            <Text style={styles.backButtonIcon}> {'\<'} </Text>
                        </TouchableOpacity>
                        <Text style={styles.headerText}>MCK</Text>
                    </View>
                    <View style={styles.headerRight}>
                        <TouchableOpacity style={styles.findButton}>
                            <Text style={styles.findText}>Find on Map</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.mapContainer}>
                    <View style={styles.searchItemContainer}>
                        <TextInput style={styles.searchItem}
                                    placeholder='Search'>

                        </TextInput>
                        <TouchableOpacity style={styles.inputButton}>
                            <Text style={styles.searchIcon}>||</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.mapSearchContent}>
                <View style={styles.searchContent}>
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
                    <View style={styles.searchContent}>
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
    mapSearchContainer:{
        flex:1,
        width: wdth,
        height: hght,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        backgroundColor: 'white',
        overflow: 'hidden',
    },
    header:{
        display: 'flex',
        width: wdth,
        height: hght * 0.1,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        backgroundColor: '#51626b',
        color: 'white',
        justifyContent:'space-between',
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
    headerLeft:{
        display:'flex',
        flexDirection: 'row',
        width: wdth * 0.2,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
    },
    headerRight:{
        alignItems:'center',
        width: wdth * 0.25,
        alignSelf:'center',
    },
    findText:{
        textAlign:'center',
        color:'white',
        fontSize: fontSizer(wdth) - 2,
    },
    mapContainer:{
        width: wdth,
        height: hght * 0.55,
        justifyContent:'flex-start',
        alignItems:'center',
        alignSelf:'center',
        backgroundColor: '#dbdbdb'
    },
    searchItemContainer:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'nowrap',
        width: wdth * 0.8,
        height: hght * 0.08,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor:'#dbdbdb',
        marginVertical: 7.5,

    },
    searchItem:{
        width: wdth * 0.65,
        height: hght * 0.75,
        paddingLeft:15,
        fontSize: fontSizer(wdth),
        
    },
    inputButton:{
        width: wdth * 0.15,
        height: hght * 0.75,
        alignSelf:'center',
        textAlign:'right',
        justifyContent:'center',
    },
    searchIcon:{
        fontSize: fontSizer(wdth) + 4,
        textAlign:'right',
        alignSelf:'center',
    },
    mapSearchContent:{
        flex:1,
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
    },
    searchContent:{
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

export default MapSearch;