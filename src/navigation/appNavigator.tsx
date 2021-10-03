import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import Loader from '../components/modals/loader';
import {DETAIL_SCREEN, HOME_SCREEN} from '../constants';
import {DetailScreen} from '../screens/detailScreen';
import {HomeScreen} from '../screens/home/homeScreen';
import {MyTheme, screenOptions} from '../theme/appStyles';
import {Reducers} from '../types/types';

const RootStack = createStackNavigator();

const MainLoader = () => {
  const loaderEnabled = useSelector(
    (state: Reducers) => state.application.showLoader,
  );
  return loaderEnabled ? <Loader /> : null;
};

const AppNavigator = () => {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="#13728c" />
      <NavigationContainer theme={MyTheme}>
        <RootStack.Navigator screenOptions={screenOptions}>
          <RootStack.Screen name={HOME_SCREEN} component={HomeScreen} />
          <RootStack.Screen name={DETAIL_SCREEN} component={DetailScreen} />
        </RootStack.Navigator>
        <MainLoader />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export {AppNavigator};
