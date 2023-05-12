import React from 'react'
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
} from 'react-native'
import Pic from './imageHolder';

const Scrolling = props => {

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.mainContainer}>
                <Text style={styles.titleStyle}>
                    PicSnap
                </Text>
                <View style={[styles.scrollViewStyle, {height: props.height}]}>
                    <ScrollView horizontal={true} >
                        {props.images.map((image, imageIndex) => {
                            return (
                                <Pic 
                                    key={imageIndex} 
                                    height={props.height} 
                                    imageUri={image.image} 
                                    title={image.title}
                                    onSelect={props.onSelect} />
                            )
                        })}
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Scrolling;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 30,
        alignItems: 'center'
    },
    titleStyle: {
        color: '#4d4d4d',
        fontSize: 24, 
        fontWeight: 600,
    },
    scrollViewStyle: {
        flex: 1,
        marginTop: 20
    },
    bannerText: {
        color: 'black',
        fontSize: 32,
        marginTop: 50,
        marginBottom: 25
    },
})