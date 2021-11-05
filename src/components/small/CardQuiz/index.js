import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {IconArrowRightShort} from '../../../assets';
import {colors, fonts} from '../../../utils';

const CardQuiz = ({quiz, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.content}
      onPress={() => navigation.navigate('Pelajaran Quiz', {quiz})}>
      <View style={styles.angkaDanJudul}>
        <Text style={styles.angka}>{quiz.nomor}</Text>
        <Text style={styles.textJudul}>{quiz.nama}</Text>
      </View>
      <IconArrowRightShort />
    </TouchableOpacity>
  );
};

export default CardQuiz;

const styles = StyleSheet.create({
  content: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  angkaDanJudul: {
    flexDirection: 'row',
  },
  angka: {
    fontFamily: fonts.primary.bold,
    fontSize: 20,
  },
  textJudul: {
    fontFamily: fonts.primary.bold,
    fontSize: 20,
    color: colors.black,
    marginLeft: 12,
  },
});
