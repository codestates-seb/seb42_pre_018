import axios from 'axios';

import {
  allQuestionsData as _allQuestionsData,
  singleQuestionData as _singleQuestionData,
  createSingleQuestion as _createSingleQuestion,
} from './urls';

export const allQuestionsData = () => {
  return axios.get(_allQuestionsData);
};

export const singleQuestionData = (id) => {
  return axios.get(_singleQuestionData.replace('{id}', id));
};

export const createSingleQuestion = (formData) => {
  return axios.post(_createSingleQuestion, formData);
};
