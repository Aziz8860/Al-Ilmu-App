import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import {EmptyNotif} from '../../assets'
import { colors, fonts, responsiveHeight, responsiveWidth } from '../../utils'

export default class Notification extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={EmptyNotif} style={styles.gambar}/>
                <Text style={styles.text}>Anda tidak memiliki notifikasi</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
    },
    gambar: {
        marginTop: responsiveHeight(200),
        width: responsiveWidth(260),
        height: responsiveHeight(260),
    },
    text: {
        fontFamily: fonts.primary.regular,
        fontSize: 15,
        marginTop: -20
    }
})
