/* eslint-disable react-hooks/exhaustive-deps */
import React, {useRef} from 'react';
import {View, StyleSheet} from 'react-native';
import {HomeStackParamList, Reducers} from '../../types/types';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {DETAIL_SCREEN, HOME_SCREEN} from '../../constants';
import {useDispatch, useSelector} from 'react-redux';
import {getNews} from '../../store/actions/application.action';
import {FlatList} from 'react-native-gesture-handler';
import {ItemView} from '../../components/itemView';

type ScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  typeof HOME_SCREEN
>;

type ScreenRoutProp = RouteProp<HomeStackParamList, typeof HOME_SCREEN>;

interface OwnProps {
  navigation: ScreenNavigationProp;
  route: ScreenRoutProp;
}

const HomeScreen = (props: OwnProps) => {
  const dispatch = useDispatch();
  const newsHeadlines = useSelector(
    (state: Reducers) => state.application.news,
  );
  const pageNumber = useRef<number>(0);
  const pageSize = useRef<number>(10);

  React.useEffect(() => {
    dispatch(
      getNews({pageNumber: pageNumber.current, pageSize: pageSize.current}),
    );
  }, []);

  const onEndReached = () => {
    // console.warn(newsHeadlines?.length);
    dispatch(
      getNews({
        pageNumber: Math.min((pageNumber.current += 1), 9), // Assumes that the most number of records would be 100
        pageSize: 10,
      }),
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={newsHeadlines}
        onEndReached={onEndReached}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <ItemView
            onPress={() =>
              props.navigation.navigate(DETAIL_SCREEN, {
                selectedIndex: index,
              })
            }
            item={item}
            index={index}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export {HomeScreen};
