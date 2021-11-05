import React from 'react';
import {StyleSheet, Image, TouchableOpacity, View, Text} from 'react-native';
import { IconArrowRight } from '../../../assets';
import {colors, fonts} from '../../../utils';

const CardLesson = ({lesson, navigation}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Pelajaran')}>
      <View style={styles.card}>
        <View style={styles.cardTop}>
          <View style={styles.backgroundLogo}>
            <Image source={lesson.gambar} style={styles.logo} />
          </View>
          <View style={styles.percentage}>
            <Text style={styles.percentageText}>0%</Text>
          </View>
        </View>

        <View style={styles.cardBottom}>
            <Text style={styles.head}>{lesson.nama}</Text>
            <Text style={styles.subhead}>Mulai <IconArrowRight /></Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardLesson;

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
  },
  card: {
    backgroundColor: colors.brown,
    height: 130,
    width: 150,
    padding: 10,
    borderRadius: 20,
    justifyContent: 'space-between'
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backgroundLogo: {
    backgroundColor: colors.secondary,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
  },
  logo: {
    width: 23,
    height: 23,
  },
  percentage: {
    backgroundColor: colors.brownSoft,
    borderRadius: 10,
    padding: 3,
    width: 40,
    height: 25,
    justifyContent: 'center',
  },
  percentageText: {
    color: colors.white,
    fontFamily: fonts.primary.regular,
    textAlign: 'center',
  },
  cardBottom: {
    marginBottom: 5,
  },
  head: {
    color: colors.white,
    fontSize: 17,
    fontFamily: fonts.primary.bold,
    marginBottom: 5
  },
  subhead: {
    color: colors.white,
    fontSize: 12,
    fontFamily: fonts.primary.regular,
    justifyContent: 'center'
  }
});
