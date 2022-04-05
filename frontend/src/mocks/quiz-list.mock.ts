import { Quiz } from '../models/quiz.model';
import { Question } from '../models/question.model';

export const QUESTION_ACTOR: Question = {
    id: '1',
    label: 'Jean Gabin a joué dans...',
    answers: [
        {
            value: 'Les tuches II',
            isCorrect: false,
        },
        {
            value: 'La grande illusion',
            isCorrect: true,
        }
    ]
};

export const QUIZ_LIST: Quiz[] = [
    {
        id: '1',
        name: 'Quiz 1',
        description: 'Ceci est un quiz d\'exemple, démarrez le backend pour voir les quiz', // What's happening if I change this value..?
        category: {id: 1, name: 'Personnes'},
        questions: [],
    }
];
