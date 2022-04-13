import { Question } from './question.model';
import {Category} from './category.model';

export interface Quiz {
    id: string;
    name: string;
    description: string;
    category: Category;
    questions: Question[];
    correctQuestions?: number;
    incorrectQuestions?: number;

}
