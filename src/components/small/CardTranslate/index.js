import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const CardTranslate = ({translate}) => {
  return (
    <View style={styles.hasil}>
      <Text style={styles.fontHasil}>{translate.hasil}</Text>
      <Text style={styles.fontHasilArab}>{translate.hasilArab}</Text>
    </View>
  );
};

export default CardTranslate;

const styles = StyleSheet.create({
  hasil: {
    marginBottom: 15,
    borderBottomColor: colors.border,
    borderBottomWidth: 0.5,
  },
  fontHasil: {
    color: colors.black,
    fontFamily: fonts.primary.regular
  },
  fontHasilArab: {
    color: colors.black,
    fontSize: 18,
    marginTop: 4,
    marginBottom: 6
  },
});
