import {Question} from './question.model';

export interface QuizInstance {
  id?: string;
  num: number;
  quizId: string;
  userId: string;
  stade: number;
  correctAnswers: number;
  wrongAnswers: number;
  questions: Question[];
}
