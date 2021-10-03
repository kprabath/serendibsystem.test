import React, {useState} from 'react';
import {Text, View, Pressable, StyleSheet, Image} from 'react-native';
import moment from 'moment';

const ItemView = ({
  item,
  onPress,
}: {
  item: {
    title: string;
    urlToImage: string;
    author: string;
    publishedAt: string;
    source: any;
    description: string;
  };
  index: number;
  onPress: Function;
}) => {
  const localImageLink = require('.././../assets/images/news.png');
  const [imageLink, setImageLink] = useState({uri: item.urlToImage});

  return (
    <Pressable onPress={() => onPress()} style={styles.container}>
      <Text style={[styles.heading, styles.color]}>{item.title}</Text>
      <Text
        style={[
          styles.author,
          styles.color,
        ]}>{`By ${item.author} - ${item.source.name}`}</Text>
      <Text style={[styles.date, styles.color]}>
        {moment('2021-10-02T21:52:23.9216475Z').format('dd mm yyyy')}
      </Text>
      {item.description && (
        <View style={styles.imageContainer}>
          <Image
            defaultSource={localImageLink}
            style={styles.image}
            resizeMode="cover"
            onError={_ => setImageLink(localImageLink)}
            source={imageLink}
          />
          <Text numberOfLines={4} style={[styles.description, styles.color]}>
            {item.description}
          </Text>
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: 'white', margin: 10, padding: 20},
  heading: {
    fontSize: 16,
    fontFamily: 'SharpSans-Semibold',
  },
  date: {
    fontFamily: 'SharpSans-Medium ',
    fontSize: 11,
    marginTop: 5,
  },
  author: {
    fontFamily: 'SharpSans-Medium',
    marginTop: 5,
  },
  description: {flex: 0.66, fontFamily: 'SharpSans-Book'},
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  image: {flex: 0.3, height: 100},
  color: {color: 'black'},
});

export {ItemView};
