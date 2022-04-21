import { Question } from './question.model';

export interface QuizInstance {
  quizId: string;
  userId: string;
  stade: number;
  correctAnswers: number;
  wrongAnswers: number;
  questions: Question[];
}
