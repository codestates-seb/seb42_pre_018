import axios from 'axios';

import {
  allQuestionsData as _allQuestionsData,
  singleQuestionData as _singleQuestionData,
} from './urls';

export const allQuestionsData = () => {
  return axios.get(_allQuestionsData);
};

export const singleQuestionData = (id) => {
  return axios.get(_singleQuestionData.replace('{id}', id));
};
