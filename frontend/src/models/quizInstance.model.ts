import { Question } from './question.model';

export interface QuizInstance {
  quizId: string;
  userId: string;
  correctAnswers: number;
  wrongAnswers: number;
  questions: Question[];
}
