import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {IlustrasiAtas, IlustrasiBawah, Logo} from '../../assets';
import {colors, fonts, responsiveHeight} from '../../utils';

export default class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.replace('MainApp');
    }, 3000);
  }

  render() {
    return (
      <View style={styles.pages}>
        <Image source={Logo} style={styles.logo}/>
        <View style={styles.ilustrasi1}>
          <Image source={IlustrasiAtas} style={styles.gambar}/>
        </View>

        <View style={styles.ilustrasi2}>
          <Image source={IlustrasiBawah} style={styles.gambar}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  logo: {
    height: responsiveHeight(100),
    width: responsiveHeight(100),
    borderRadius: 10
  },
  ilustrasi1: {
    position: 'absolute',
    top: 0,
    left: 0
  },
  gambar: {
    height: responsiveHeight(230),
    width: responsiveHeight(210)
  },
  ilustrasi2: {
    position: 'absolute',
    bottom: 0,
    right: 0
  },
});
