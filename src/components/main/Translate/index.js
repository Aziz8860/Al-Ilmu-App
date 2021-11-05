import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {IconSearch} from '../../../assets';
import {colors, fonts, responsiveHeight} from '../../../utils';
import {CardTranslate} from '../../small';

const Translate = ({results}) => {
  const [text, onChangeText] = React.useState('membaca');

  return (
    <View>
      <View style={styles.searchSection}>
        <IconSearch />
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={onChangeText}
          placeholder={'Masukkan kata'}
        />
      </View>
      <View style={styles.hasil}>
        {results.map(translate => {
          return <CardTranslate translate={translate} key={translate.id} />;
        })}
      </View>
    </View>
  );
};

export default Translate;

const styles = StyleSheet.create({
  searchSection: {
    marginTop: 10,
    height: 42,
    width: 320,
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 12,
    paddingLeft: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  input: {
    flex: 1,
    fontSize: 13,
    fontFamily: fonts.primary.regular,
  },
  hasil: {
    marginTop: 10,
    height: responsiveHeight(540),
    width: 320,
    backgroundColor: colors.white,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    padding: 15,
  },
});
