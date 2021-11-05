import React, {Component} from 'react';
import {Text, Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../utils';
import {ProfilePict} from '../../assets';
import {listMenu} from '../../data';
import {ListMenu} from '../../components';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: listMenu,
    };
  }

  render() {
    const {menus} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.topCard}>
          <Image source={ProfilePict} style={styles.profilePict} />
          <Text style={styles.name}>Muhammad Aziz</Text>
          <Text style={styles.email}>m.aziz@gmail.com</Text>
        </View>
        <View style={styles.bottomCard}>
          <ListMenu menus={menus} />
        </View>
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.textLogout}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.grayProfile,
    flex: 1,
  },
  topCard: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    backgroundColor: colors.white,
    height: responsiveHeight(215),
    width: responsiveWidth(319),
    marginHorizontal: 28,
    marginTop: responsiveHeight(88),
    borderRadius: 23,
    padding: 22,
    alignItems: 'center',
  },
  profilePict: {
    height: responsiveHeight(80),
    width: responsiveWidth(80),
  },
  name: {
    fontFamily: fonts.primary.bold,
    color: colors.black,
    fontSize: 20,
    marginTop: 14,
  },
  email: {
    fontFamily: fonts.primary.regular,
    color: colors.border,
    fontSize: 14,
    marginTop: 2,
  },
  bottomCard: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    backgroundColor: colors.white,
    height: responsiveHeight(340),
    width: responsiveWidth(319),
    marginHorizontal: 28,
    marginTop: responsiveHeight(20),
    borderRadius: 23,
    padding: 22,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    marginTop: responsiveHeight(20),
    height: responsiveHeight(60),
    width: responsiveWidth(319),
    padding: 9,
    borderRadius: 22,
  },
  textLogout: {
    color: colors.white,
    fontFamily: fonts.primary.regular,
    fontSize: 15,
  },
});
