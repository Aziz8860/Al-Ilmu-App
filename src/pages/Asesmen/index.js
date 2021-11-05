import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../utils';
import {CardBiru, CardHijau, CardPink, IconMenu, IconPlus} from '../../assets';

export default class Asesmen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <TouchableOpacity style={styles.iconPlus}>
            <IconPlus />
          </TouchableOpacity>
          <TouchableOpacity>
            <IconMenu />
          </TouchableOpacity>
        </View>

        <View style={styles.list}>
          <Text style={styles.judulText}>Kelas yang Anda ikuti</Text>
          <View style={styles.cardSettings}>
            <TouchableOpacity style={styles.card1}>
              <Image source={CardBiru} style={styles.gambarCard1} />
              <Text style={styles.textCard1}>Bahasa Arab Lanjutan</Text>
              <Text style={styles.siswaCard1}>25 siswa</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card1}>
              <Image source={CardHijau} style={styles.gambarCard1} />
              <Text style={styles.textCard1}>Pengantar Muamalah</Text>
              <Text style={styles.siswaCard1}>32 siswa</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card1}>
              <Image source={CardPink} style={styles.gambarCard1} />
              <Text style={styles.textCard1}>Ushul Fiqih</Text>
              <Text style={styles.siswaCard1}>43 siswa</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grayProfile,
    flex: 1,
  },
  topBar: {
    marginTop: 30,
    marginBottom: 5,
    marginHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  iconPlus: {
    marginRight: 16,
  },
  list: {
    marginTop: 10,
    height: responsiveHeight(720),
    backgroundColor: 'rgba(29, 35, 48, 0.1)',
    borderRadius: 12,
    marginHorizontal: 30,
  },
  judulText: {
    fontFamily: fonts.primary.bold,
    color: colors.black,
    fontSize: 15,
    marginTop: 15,
    marginLeft: 15,
    marginBottom: 12,
  },
  cardSettings: {
    alignItems: 'center',
  },
  card1: {
    height: responsiveHeight(180),
    width: responsiveWidth(315),
    backgroundColor: colors.white,
    borderRadius: 10,
    marginBottom: 20
  },
  gambarCard1: {
    height: responsiveHeight(110),
    width: responsiveWidth(315),
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  textCard1: {
    paddingLeft: 10,
    paddingTop: 5,
    color: colors.black,
    fontFamily: fonts.primary.bold,
  },
  siswaCard1: {
    paddingLeft: 10,
    paddingTop: 5,
    fontFamily: fonts.primary.regular,
    fontSize: 10,
  },
});
