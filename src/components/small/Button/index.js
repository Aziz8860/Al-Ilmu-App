import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconBack, IconNotification, IconSubmit} from '../../../assets';
import {colors} from '../../../utils';
import TextIcon from './TextIcon';
import TextOnly from './TextOnly';

const Tombol = props => {
  const Icon = () => {
    if (icon === 'notification') {
      return <IconNotification />;
    } else if (icon === 'arrow-left') {
      return <IconBack />;
    } else if (icon === 'submit') {
      return <IconSubmit />;
    }

    return <IconNotification />;
  };

  const {icon, padding, type, onPress} = props;

  if (type === 'text') {
    return <TextOnly {...props} />;
  } else if (type === 'textIcon') {
    return <TextIcon {...props} />;
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default Tombol;

const styles = StyleSheet.create({});
