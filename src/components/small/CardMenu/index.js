import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {IconArrowRightShort} from '../../../assets';
import {colors, fonts} from '../../../utils';

const CardMenu = ({menu}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.iconText}>
        {menu.gambar}
        <Text style={styles.text}>{menu.nama}</Text>
      </View>
      <IconArrowRightShort />
    </TouchableOpacity>
  );
};

export default CardMenu;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 5,
  },
  iconText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: colors.black,
    marginLeft: 12,
    fontFamily: fonts.primary.regular,
    fontSize: 15,
  },
});
