import React, {Component} from 'react';
import {View,StyleSheet,Dimensions,Image,TextInput,Text,TouchableOpacity} from 'react-native';


class Compare extends Component{
    constructor(){
        super();
        this.state={
            search: ''
        }
    }
    render(){
        return(
            <View style={styles.compareContainer}>
                <View style={styles.compareHeader}>
                    <TouchableOpacity style={styles.backButton}>
                        <Text style={styles.backButtonIcon}> {'\<'} </Text>
                    </TouchableOpacity>
                    <Text style={styles.headerText}>MCK</Text>
                </View>

                <View style={styles.comparison}>
                    <Text style={styles.mainItem}>MCK</Text>
                    <Text style={styles.vsText}>vs</Text>
                    <View style={styles.compareItemContainer}>
                        <TextInput style={styles.compareItem}
                                    placeholder='To compare'>

                        </TextInput>
                        <TouchableOpacity style={styles.inputButton}>
                            <Text style={styles.searchIcon}>||</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
                <View style={styles.resultContainer}>
                    <Text style={styles.winnerText}>MCK Wins...</Text>
                    <Text style={styles.winDifference}>MCK has 5 average while Kadir is 1</Text>
                    <View style={styles.resultButtons}>
                        <TouchableOpacity style={styles.detailsButton}>
                            <Text style={styles.detailsText}>View Details</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.shareButton}>
                            <Text style={styles.shareText}>|| Share This</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.compareFooter}>
                    <Text style={styles.reportInfo}>Got branches? We can help you find out which one shines and which one slacks. Get a report now.</Text>
                    <View style={styles.reportButtons}>
                        <TouchableOpacity style={styles.reportButton}>
                            <Text style={styles.reportText}>FAQ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.reportButton}>
                            <Text style={styles.reportText}>PRICING</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.reportButton}>
                            <Text style={styles.reportText}>GET A FREE REPORT</Text>
                        </TouchableOpacity>
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
    compareContainer:{
        flex:1,
        width: wdth,
        height: hght,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        backgroundColor: 'white',
        overflow: 'hidden',
    },
    compareHeader:{
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
    comparison:{
        display:'flex',
        flexDirection:'column',
        width: wdth * 0.9,
        height: hght * 0.25,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },
    mainItem:{
        fontSize: fontSizer(wdth)+6,
        textAlign:'center',
        marginVertical: 7.5,

    },
    vsText:{
        fontSize: fontSizer(wdth),
        textAlign:'center',
        color:'#d6d6d6',

    },
    compareItemContainer:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'nowrap',
        width: wdth * 0.8,
        height: hght * 0.075,
        backgroundColor:'#f7f7f7',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor:'#dbdbdb',
        marginVertical: 7.5,

    },
    compareItem:{
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
    resultContainer:{
        display:'flex',
        width: wdth,
        height: hght* 0.4,
        flexDirection:'column',
        justifyContent: 'space-evenly',
        alignItems:'center',
        alignSelf:'center',
        
    },
    winnerText:{
        fontSize:fontSizer(wdth) + 6,
        color: '#4985e5',
        textAlign:'center',
        fontWeight:'bold',
    },
    winDifference:{
        fontSize:fontSizer(wdth) - 2,
        textAlign:'center',
    },
    resultButtons:{
        height: hght * 0.15,
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        alignSelf:'center',
    },
    detailsButton:{
        width: wdth * 0.3,
        height: hght * 0.075,
        backgroundColor:'#51626b',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
    },
    detailsText:{
        color:'white',
        fontSize: fontSizer(wdth) - 2,
    },
    shareButton:{
        width: wdth * 0.4,
        height: hght * 0.05,
        backgroundColor:'#dbdbdb',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
    },
    shareText:{
        fontSize: fontSizer(wdth) - 2,
    },
    compareFooter:{
        display:'flex',
        flexDirection:'column',
        height : hght * 0.15,
        width: wdth,
        justifyContent:'space-evenly',
        alignItems:'center',
        alignSelf:'center',
    },
    reportInfo:{
        width: wdth * 0.9,
        textAlign:'center',
        fontSize:fontSizer(wdth) - 2,
    },
    reportButtons:{
        display:'flex',
        flexDirection:'row',
        width: wdth * 0.9,
        justifyContent:'space-evenly',
        alignItems:'flex-start',
        alignSelf:'center',
    },
    reportText:{
        color:'#4985e5',
        fontSize: fontSizer(wdth) - 2,
        fontWeight:'500',
    }
});

export default Compare;