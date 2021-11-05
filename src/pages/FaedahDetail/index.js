import React, {Component} from 'react';
import {Text, View, ScrollView, StyleSheet, Image} from 'react-native';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../utils';

export default class FaedahDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      faedah: this.props.route.params.faedah,
      gambar: this.props.route.params.faedah.gambar,
    };
  }

  render() {
    const {faedah, gambar} = this.state;
    return (
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <Text style={styles.judul}>{faedah.nama}</Text>
            <Image source={faedah.gambar} style={styles.gambar} />
            <Text style={styles.desc}>{faedah.desc}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.grayProfile,
    flex: 1,
  },
  content: {
    alignItems: 'center',
    marginHorizontal: 30,
  },
  judul: {
    textAlign: 'center',
    fontFamily: fonts.primary.bold,
    fontSize: 19,
    color: colors.black,
    marginVertical: 20,
  },
  gambar: {
    width: responsiveWidth(200),
    height: responsiveHeight(230),
    alignSelf: 'center',
    marginBottom: 10,
    borderRadius: 10
  },
  desc: {
    textAlign: 'left',
    fontFamily: fonts.primary.regular,
    fontSize: 14,
    color: colors.black,
  },
});
