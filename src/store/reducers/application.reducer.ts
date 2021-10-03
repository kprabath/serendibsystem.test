import {GET_NEWS_SUCCESS, LOADER_BEGIN, LOADER_END} from '../../constants';
import {ApplicationReducerType} from '../../types/types';

const INITIAL_STATE: ApplicationReducerType = {
  news: [],
  showLoader: false,
};

export default (state = INITIAL_STATE, {type, payload}: {type: string}) => {
  switch (type) {
    case LOADER_BEGIN:
      return {...state, showLoader: true};
    case LOADER_END:
      return {...state, showLoader: false};
    case GET_NEWS_SUCCESS:
      return {...state, news: [...state.news, ...payload.articles]};
    default:
      return state;
  }
};
