import React, { Component } from 'react'
import { Text, StyleSheet, View, Image} from 'react-native'
import {colors, fonts, responsiveHeight} from '../../utils';

export default class PelajaranDetail extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          materi: this.props.route.params.materi,
          isi: this.props.route.params.materi.isi,
        };
      }

    render() {
        const {materi} = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.judul}>{materi.nama}</Text>
                <Image source={materi.isi} style={styles.materi}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1
    },
    judul: {
        textAlign: 'center',
        marginVertical: responsiveHeight(16),
        fontFamily: fonts.primary.bold,
        color: colors.black,
        fontSize: 14
    },
    materi: {
        width: '100%',
        height: '68%',
    }
})
