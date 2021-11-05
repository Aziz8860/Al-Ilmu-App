import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View, StatusBar} from 'react-native';
import {DaftarPelajaran, FaedahKebahasaan, Header} from '../../components';
import {colors, fonts} from '../../utils';
import {daftarPelajaran, faedahKebahasaan} from '../../data';

export default class Home extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       lessons: daftarPelajaran,
       faedahs: faedahKebahasaan,
    }
  }
  
  render() {
    const {lessons, faedahs, index} = this.state
    const {navigation} = this.props;
    return (
      <View style={styles.page}>
        <StatusBar backgroundColor="#1D2330" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header navigation={navigation} />
          <View style={styles.judulCourse}>
            <Text style={styles.judulText}>Daftar Pelajaran</Text>
            <Text style={styles.seeAll}>Lihat Semua</Text>
          </View>
          <DaftarPelajaran lessons={lessons} navigation={navigation}/>
          <View style={styles.judulCourse}>
            <Text style={styles.judulText}>Faedah Kebahasaan</Text>
            <Text style={styles.seeAll}>Lihat Semua</Text>
          </View>
          
          <FaedahKebahasaan faedahs={faedahs} navigation={navigation}/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  judulCourse: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 25,
    alignItems: 'baseline',
  },
  judulText: {
    color: colors.black,
    fontSize: 20,
    fontFamily: fonts.primary.bold,
  },
  seeAll: {
    color: colors.secondary,
    fontSize: 12,
    fontFamily: fonts.primary.bold,
  }
});
