import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image
} from 'react-native'

const Share = props => {

    const onBack = () => {
        props.onBack();
    }

    const onShare = () => {
        props.onShare(props.imageUri);
    }


    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
            <TouchableOpacity style={styles.backContainer} activeOpacity={0.5} onPress={onBack}>
                <Image source={require('../images/arrow.png')} style={styles.backArrow} />
            </TouchableOpacity>
            <View style={styles.mainContainer}>
                <Text style={styles.titleStyle}>
                    Share this photo on Snapchat?
                </Text>
                <View style={[styles.imageBox, {height: props.height}]}>
                    <Image source={props.imageUri} style={styles.imageStyle}/>
                </View>
                <TouchableOpacity style={styles.shareButton} activeOpacity={0.5} onPress={onShare}>
                    <Text style={styles.shareText}>Share</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Share

const styles = StyleSheet.create({
    testTop: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: 'white'
    },
    topPart: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white'
    },
    backContainer: {
        flex: 1, 
        alignSelf: 'flex-start', 
        width: 40,
        backgroundColor: 'white', 
        paddingLeft: 15, 
        marginTop: 10
    },
    backArrow: {
        flex:1, 
        height: null, 
        width: null, 
        resizeMode: 'contain', 
        tintColor: '#6e6e6e'
    },
    mainContainer: {
        flex: 13,
        backgroundColor: 'white',
        paddingLeft: 40,
        paddingRight: 40,
        paddingBottom: 50,
       // paddingTop: 10,
        alignItems: 'center'
    },
    titleStyle: {
        fontSize: 22,
        color: '#6e6e6e',
        paddingHorizontal: 10,
        fontWeight: 500
    },
    imageBox: {
        flex: 1,
        margin: 10,
        width: 350,
        borderColor: '#e7e7e7',
        borderWidth: 5,
        borderRadius: 5,
    },
    imageStyle: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    shareButton: {
        marginTop:10,
        paddingTop:15,
        paddingBottom:15,
        marginLeft:30,
        marginRight:30,
        backgroundColor:'#eeeeee',
        borderRadius:10,
        borderWidth: 4,
        borderColor: '#dddddd'
    },
    shareText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#6e6e6e',
        paddingLeft: 50,
        paddingRight: 50,
        textAlign: 'center'
    },
})