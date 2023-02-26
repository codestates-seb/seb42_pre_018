import axios from 'axios';

import {
  allQuestionsData as _allQuestionsData,
  singleQuestionData as _singleQuestionData,
  createSingleQuestion as _createSingleQuestion,
  editQuestion as _editQuestion,
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

export const editQuestion = (formData, id) => {
  return axios.patch(_editQuestion.replace('{id}', id), formData);
};
