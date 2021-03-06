import React, {Component} from 'react';
import {View,StyleSheet,Dimensions,Image,Text,TouchableOpacity} from 'react-native';
import { BarChart, Grid,YAxis } from 'react-native-svg-charts';


class InfoPopup extends Component{
    constructor(){
        super();
        this.state={
            search: ''
        }
    }
    render(){
        const data   = [ 3,5,1,3.6,1.1,2,4.1,0.2,3.5,5 ]

        const fill = '#4985e5'
        return(
            <View style={styles.infoPopupContainer}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backButton}>
                        <Text style={styles.backButtonIcon}> {'\<'} </Text>
                    </TouchableOpacity>
                    <Text style={styles.headerText}>MCK</Text>
                </View>

                <View style={styles.info}>
                    <View style={styles.infoTexts}>
                        <Text style={styles.infoTxt}>You rated this 5 stars 9 days ago.</Text>
                        <Text style={styles.infoTxt}>Your friends gave 4.5 stars.</Text>
                        <Text style={styles.infoTxt}>World average is 4.7, give us your rating now!</Text>
                    </View>
                    <View style={styles.ritStars}>
                            <Image style={styles.star} source={require('../../Assets/StarTrue2x.png')}/>
                            <Image style={styles.star} source={require('../../Assets/StarTrue2x.png')}/>
                            <Image style={styles.star} source={require('../../Assets/StarTrue2x.png')}/>
                            <Image style={styles.star} source={require('../../Assets/StarTrue2x.png')}/>
                            <Image style={styles.star} source={require('../../Assets/StarFalse2x.png')}/>
                    </View>
                    <View style={styles.infoButtons}>
                        <TouchableOpacity style={styles.infoButton}>
                            <Text style={styles.infoButtonText}>SEE INSIGTS</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.infoButton}>
                            <Text style={styles.infoButtonText}>COMPARE</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.infoButton}>
                            <Text style={styles.infoButtonText}>FAVORITE</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={{textAlign:'left'}}>Rit Trend Last 10 Days</Text>
                <View style={styles.rateHistory}>
                    
                    <BarChart
                        style={{ flex:1,marginLeft: 5 }}
                        gridMin={1}
                        gridMax={5}
                        data={ data }
                        svg={{ fill }}
                        contentInset={{ top: 20, bottom: 20 }}
                        >
                        <Grid/>
                    </BarChart>
                    <YAxis
                        style={{}}
                        data={data}
                        numberOfTicks={5}
                        formatLabel={(value,index) => index+1}
                        contentInset={{top:20,bottom:20}}
                        svg={{fontSize: 10, fill:'black'}}
                        />
                </View>

                <View style={styles.popupFooter}>
                    <Text style={styles.reportInfo}>Did you know that Rit can tell which cities hate your brand the most?Ouch! Get a free report now.</Text>
                    <TouchableOpacity style={styles.reportButton}>
                        <Text style={styles.reportText}>GET A FREE REPORT</Text>
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
    infoPopupContainer:{
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
    info:{
        display:'flex',
        flexDirection:'column',
        width: wdth * 0.9,
        height: hght * 0.375,
        justifyContent:'space-around',
        alignItems:'center',
        alignSelf:'center',
    },
    infoTexts:{
        display:'flex',
        justifyContent: 'space-between',
        height: hght * 0.1,
    },
    infoTxt:{
        fontSize: fontSizer(wdth) - 2,
        textAlign:'left',
    },
    ritStars:{
        width: wdth * 0.8,
        display:'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent:'space-around',
        alignSelf:'center',
    },
    star:{
        width: wdth * 0.13,
        height: wdth * 0.13,
    },
    infoButtons:{
        display:'flex',
        flexDirection:'row',
        width: wdth * 0.9,
        justifyContent:'space-evenly',
        alignItems:'flex-start',
        alignSelf:'center',
    },
    infoButtonText:{
        color:'#4985e5',
        fontSize: fontSizer(wdth) - 2,
        fontWeight:'500',
    },
    rateHistory:{
        height: 200,
        padding: 20,
        flexDirection:'row-reverse',
    },
    popupFooter:{
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
        alignSelf:'center',
        fontSize:fontSizer(wdth) - 2,
    },
    reportButton:{
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
    },
    reportText:{
        color:'#4985e5',
        fontSize: fontSizer(wdth) - 2,
        fontWeight:'500',
    },
});

export default InfoPopup;