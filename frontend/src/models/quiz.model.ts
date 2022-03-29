import { Question } from './question.model';

export interface Quiz {
    id: string;
    name: string;
    description: string;
    category: string;
    questions: Question[];
    correctQuestions?: string;
    incorrectQuestions?: string;

}
