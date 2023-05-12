import React, { useState } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    useWindowDimensions,
    TouchableOpacity,
    Alert
} from 'react-native';

const Pic = props => {

    const onSelect = () => {
        props.onSelect(props.imageUri);
    }

    return (
        <View style={[styles.container, {height: props.height}]}>
            <View style={styles.picContainer}>
                <Image
                    source={props.imageUri}
                    style={styles.picStyle}
                />
            </View>
            <TouchableOpacity 
                style={styles.textContainer}
                onPress={onSelect}>
                <Text style={styles.textStyle}>Send on Snapchat</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Pic;

const styles = StyleSheet.create({
    container: {
        width: 350,
        marginLeft: 20,
        borderWidth: 5,
        borderColor: '#e7e7e7',
        borderRadius: 5,
        backgroundColor: '#eeeeee'
    },
    picContainer: {
        flex: 10,
        marginBottom: 3
    },
    picStyle: {
        flex: 1,
        width: null,
        height: null, 
        resizeMode: 'cover'
    },
    textContainer: {
        flex: 1,
        paddingLeft: 10,
        paddingTop: 30,
        borderColor: '#dddddd',
        borderWidth: 4,
        borderRadius: 1,
        alignItems: 'center',
        backgroundColor: '#eeeeee'
    },
    textStyle: {
        fontSize: 18,
        fontWeight: '500',
        color: '#6e6e6e',
    }
})


