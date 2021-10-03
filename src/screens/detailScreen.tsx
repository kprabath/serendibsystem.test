/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {HomeStackParamList, Reducers} from '../types/types';
import {DETAIL_SCREEN} from '../constants';
import {MyWebComponent} from '../components/webComponent';
import moment from 'moment';
import {useSelector} from 'react-redux';

type ScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  typeof DETAIL_SCREEN
>;

type ScreenRoutProp = RouteProp<HomeStackParamList, typeof DETAIL_SCREEN>;

interface OwnProps {
  navigation: ScreenNavigationProp;
  route: ScreenRoutProp;
}

const DetailScreen = (props: OwnProps) => {
  const selectedObject = useSelector(
    (state: Reducers) =>
      state.application.news[props.route.params.selectedIndex],
  );

  const imageLink = useSelector(
    (state: Reducers) =>
      state.application.news[props.route.params.selectedIndex].urlToImage,
  );

  const [selectedImageLink, setSelectedImageLink] = useState({
    uri: imageLink,
  });
  const localImageLink = require('../../assets/images/news.png');

  useEffect(() => {
    props.navigation.setOptions({
      title: `${selectedObject?.title?.substring(0, 25)}...`,
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.color]}>{selectedObject?.title}</Text>
      <View style={styles.margin20}>
        <Image
          style={styles.image}
          source={selectedImageLink}
          onError={() => setSelectedImageLink(localImageLink)}
        />
        <View style={styles.detail}>
          <Text
            style={[
              styles.author,
              styles.color,
            ]}>{`By ${selectedObject?.author} - ${selectedObject?.source?.name}`}</Text>
          <Text style={[styles.date, styles.color]}>
            {moment(selectedObject?.publishedAt).format('dd mm yyyy')}
          </Text>
        </View>
      </View>
      <View style={[styles.margin20, styles.html]}>
        <MyWebComponent
          content={selectedObject?.content || selectedObject?.title}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff', padding: 20},
  title: {fontSize: 24, fontFamily: 'SharpSans-Semibold'},
  detail: {left: 0, bottom: 0},
  image: {height: 200, width: '100%'},
  margin20: {marginTop: 20},
  html: {flexGrow: 1},
  date: {fontFamily: 'SharpSans-Medium ', fontSize: 11, marginTop: 5},
  author: {
    fontFamily: 'SharpSans-Medium',
    marginTop: 5,
  },
  color: {color: 'black'},
});

export {DetailScreen};
