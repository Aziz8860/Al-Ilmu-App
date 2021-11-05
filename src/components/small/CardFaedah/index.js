import React from 'react';
import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../../utils';

const CardFaedah = ({faedah, navigation}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Faedah Detail', { faedah })}>
      <View style={styles.card}>
        <View>
          <Image source={faedah.gambar} style={styles.gambar} />
        </View>
        <View>
          <Text style={styles.judul}>{faedah.nama}</Text>
          <Text style={styles.desc} numberOfLines={2}>
            {faedah.shortDesc}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardFaedah;

const styles = StyleSheet.create({
  container: {},
  card: {
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginBottom: 12,
    padding: 15,
    borderRadius: 15,
    flexDirection: 'row',
  },
  gambar: {
    height: responsiveHeight(75),
    width: responsiveWidth(70),
    borderRadius: 7,
    marginRight: 10,
  },
  judul: {
    color: colors.black,
    fontFamily: fonts.primary.bold,
    fontSize: 14,
    marginBottom: 10,
  },
  desc: {
    fontFamily: fonts.primary.regular,
    fontSize: 12,
  },
});
