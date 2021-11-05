import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IconAsesmen,
  IconAsesmenAktif,
  IconHome,
  IconHomeAktif,
  IconKamus,
  IconKamusAktif,
  IconProfile,
  IconProfileAktif,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TabItem = ({isFocused, onLongPress, onPress, label}) => {
  const Icon = () => {
    if (label === 'Home') {
      return isFocused ? <IconHomeAktif /> : <IconHome />;
    }

    if (label === 'Kamus') {
      return isFocused ? <IconKamusAktif /> : <IconKamus />;
    }

    if (label === 'Profile') {
      return isFocused ? <IconProfileAktif /> : <IconProfile />;
    }

    if (label === 'Asesmen') {
      return isFocused ? <IconAsesmenAktif /> : <IconAsesmen />;
    }

    return <IconHome />;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: (isFocused) => ({
    color: isFocused ? colors.secondary : colors.graySoft,
    fontSize: 11,
    marginTop: 4,
    fontFamily: fonts.primary.bold,
  }),
});
