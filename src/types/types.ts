import {DETAIL_SCREEN, HOME_SCREEN} from '../constants';

export type HomeStackParamList = {
  [HOME_SCREEN]: undefined;
  [DETAIL_SCREEN]: {selectedIndex: number};
};

export interface ApplicationReducerType {
  news: any[];
  showLoader: boolean;
}

export interface Reducers {
  application: ApplicationReducerType;
}
