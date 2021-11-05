import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {colors, responsiveHeight, fonts} from '../../../utils';
import {IconSearch} from '../../../assets';
import {Button, Jarak} from '../../small';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.wrapperHeader}>
          <View>
            <Text style={styles.textHeader}>Ahlan, Aziz</Text>
            <Text style={styles.textBorder}>Mari Mulai Belajar!</Text>
          </View>
          <Button
            icon="notification"
            onPress={() => navigation.navigate('Notification')}
          />
        </View>
        <Jarak height={25} />
        <View style={styles.searchSection}>
          <IconSearch />
          <TextInput
            placeholder="Cari pelajaran"
            style={styles.input}
            onChangeText={text => this.setState({text})}
            value={this.state.text}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: responsiveHeight(245),
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  wrapperHeader: {
    marginTop: 30,
    marginHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textHeader: {
    color: colors.white,
    fontSize: 24,
    fontFamily: fonts.primary.bold,
  },
  textBorder: {
    color: colors.border,
    fontSize: 12,
    fontFamily: fonts.primary.regular,
    marginTop: 8,
  },
  searchSection: {
    height: 42,
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 12,
    paddingLeft: 10,
    alignItems: 'center',
    marginHorizontal: 25,
  },
  input: {
    flex: 1,
    fontSize: 14,
    fontFamily: fonts.primary.regular,
  },
});
