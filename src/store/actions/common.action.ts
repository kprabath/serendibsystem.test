import {LOADER_BEGIN, LOADER_END} from '../../constants';

export const toggleLoader = ({action}: {action: string}) => {
  if (action === 'start') {
    return {type: LOADER_BEGIN};
  }
  return {type: LOADER_END};
};
