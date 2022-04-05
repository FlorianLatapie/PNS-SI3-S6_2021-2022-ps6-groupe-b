import { Question } from './question.model';
import {Category} from './category.model';

export interface Quiz {
    id: string;
    name: string;
    description: string;
    category: Category;
    questions: Question[];
    correctAnswers?: string;
    incorrectAnswers?: string;

}
