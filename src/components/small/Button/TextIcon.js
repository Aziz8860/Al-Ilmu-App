import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconBack, IconNotification, IconKeranjangPutih, IconSubmit} from '../../../assets';
import {colors, fonts} from '../../../utils';
import Jarak from '../Jarak';

const TextIcon = ({icon, padding, onPress, title, fontSize}) => {
  const Icon = () => {
    if (icon === 'notification') {
      return <IconNotification />;
    } else if (icon === 'arrow-left') {
      return <IconBack />;
    } else if (icon === 'keranjang-putih') {
      return <IconKeranjangPutih />;
    } else if (icon === 'submit') {
      return <IconSubmit />;
    }

    return <IconNotification />;
  };

  return (
    <TouchableOpacity style={styles.container(padding)} onPress={onPress}>
      <Icon />
      <Jarak width={5} />
      <Text style={styles.title(fontSize)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TextIcon;

const styles = StyleSheet.create({
  container: (padding) => ({
    backgroundColor: colors.primary,
    padding: padding,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  title: (fontSize) => ({
    color: colors.white,
    fontSize: fontSize ? fontSize : 15,
    fontFamily: fonts.primary.bold,
  }),
});
