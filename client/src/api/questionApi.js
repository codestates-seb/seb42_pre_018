import axios from 'axios';

import { allQuestionsData as _allQuestionsData } from './urls';

export const allQuestionsData = () => {
  return axios.get(_allQuestionsData);
};
