const BASE = 'http://localhost:8800';

// Questions
export const allQuestionsData = BASE + '/questions/all';
export const singleQuestionData = BASE + '/questions/{id}';
export const createSingleQuestion = BASE + '/questions/ask';
export const editQuestion = BASE + '/questions/{id}/edit';
export const deleteQuestion = BASE + '/questions/{id}';
