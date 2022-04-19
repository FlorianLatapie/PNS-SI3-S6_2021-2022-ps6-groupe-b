import {Question} from './question.model';
import {Category} from './category.model';

export interface Quiz {
  userId: string;
  id: string;
  name: string;
  description: string;
  category: Category;
  questions: Question[];
  correctQuestions?: number;
  incorrectQuestions?: number;
}
