import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import {IconSwitch} from '../../assets';
import {colors, fonts} from '../../utils';
import {Translate} from '../../components';
import {hasilTranslate} from '../../data';

export default class Kamus extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       results: hasilTranslate
    }
  }
  
  render() {
    const {results} = this.state
    
    return (
      <View style={styles.container}>
        <View style={styles.switch}>
          <Text style={styles.textID}>🇮🇩 Indonesia</Text>
          <TouchableOpacity style={styles.icon}>
            <IconSwitch />
          </TouchableOpacity>
          <Text style={styles.textSA}>🇸🇦 Arab</Text>
        </View>

        <Translate results={results}/>
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
  switch: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    marginTop: 30,
    height: 60,
    width: 320,
    borderRadius: 20,
    borderColor: colors.primary,
    borderWidth: 1.8
  },
  icon: {
    marginRight: 60,
  },
  textID: {
    marginRight: 40,
    fontFamily: fonts.primary.regular,
    color: colors.black,
  },
  textSA: {
    marginRight: 10,
    fontFamily: fonts.primary.regular,
    color: colors.black,
  },
});
