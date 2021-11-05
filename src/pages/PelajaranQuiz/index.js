import React, { Component } from 'react'
import { Text, StyleSheet, View, Image} from 'react-native'
import {colors, fonts, responsiveHeight} from '../../utils';

export default class PelajaranQuiz extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          quiz: this.props.route.params.quiz,
          isi: this.props.route.params.quiz.isi,
        };
      }

    render() {
        const {quiz} = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.judul}>{quiz.nama}</Text>
                <Image source={quiz.isi} style={styles.quiz}/>
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
    quiz: {
        width: '100%',
        height: '68%',
    }
})
