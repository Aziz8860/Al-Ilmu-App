import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {colors, responsiveHeight, fonts} from '../../utils';
import {IconArrowLeftShort, Muqaddimah} from '../../assets';
import {CardMateri, CardQuiz} from '../../components';
import {materiPelajarans, materiQuiz} from '../../data';

export default class Pelajaran extends Component {
  constructor(props) {
    super(props);

    this.state = {
      materis: materiPelajarans,
      quizes: materiQuiz,
    };
  }

  render() {
    const {materis, quizes, index} = this.state;
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => {
            navigation.goBack();
          }}>
          <IconArrowLeftShort />
        </TouchableOpacity>
        <View style={styles.judul}>
          <View style={styles.backgroundLogo}>
            <Image source={Muqaddimah} style={styles.logo} />
          </View>
          <Text style={styles.text}>Kelas Dasar</Text>
        </View>

        <View style={styles.bottomStyle}>
          <Text style={styles.materiPelajaran}>Materi Pelajaran</Text>

          {materis.map(materi => {
            return (
              <CardMateri
                materi={materi}
                key={materi.id}
                navigation={navigation}
              />
            );
          })}

          {quizes.map(quiz => {
            return (
              <CardQuiz quiz={quiz} key={quiz.id} navigation={navigation} />
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  icon: {
    marginVertical: 30,
    marginHorizontal: 30,
  },
  judul: {
    marginTop: 10,
    marginLeft: 30,
    flexDirection: 'row',
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
  text: {
    fontFamily: fonts.primary.bold,
    color: colors.white,
    marginLeft: 12,
    fontSize: 22,
  },
  bottomStyle: {
    position: 'absolute',
    bottom: 0,
    height: responsiveHeight(600),
    width: '100%',
    backgroundColor: colors.white,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    paddingHorizontal: 30,
    paddingTop: 22,
  },
  materiPelajaran: {
    fontFamily: fonts.primary.bold,
    color: colors.black,
    fontSize: 22,
    marginBottom: 12,
  },
});
