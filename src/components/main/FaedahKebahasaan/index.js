import React from 'react';
import {View, StyleSheet} from 'react-native';
import {CardFaedah, Jarak} from '../../small';

const FaedahKebahasaan = ({faedahs, navigation}) => {
  return (
    <View style={styles.container}>
      {faedahs.map(faedah => {
        return <CardFaedah faedah={faedah} key={faedah.id} navigation={navigation}/>
      })}
      <Jarak height={70} />
    </View>
    
  );
};

export default FaedahKebahasaan;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        marginTop: 12
    }
});