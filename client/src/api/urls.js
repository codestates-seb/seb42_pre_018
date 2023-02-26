const BASE = 'http://localhost:8800';

// Questions
export const allQuestionsData = BASE + '/questions';
export const singleQuestionData = BASE + '/questions/{id}';
export const createSingleQuestion = BASE + '/questions/ask';
export const editQuestion = BASE + '/questions/{id}/edit';
