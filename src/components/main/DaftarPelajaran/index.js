import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {CardLesson} from '../..';

const DaftarPelajaran = ({lessons, navigation}) => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container}>
      {lessons.map(lesson => {
        return <CardLesson lesson={lesson} key={lesson.id} navigation={navigation}/>;
      })}
    </ScrollView>
  );
};

export default DaftarPelajaran;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 25,
        marginTop: 12
    }
});
