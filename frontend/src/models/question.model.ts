export interface Answer {
    type?: string;
    value: string;
    isCorrect: boolean;
}

export interface Question {
    id: string;
    label: string;
    answers: Answer[];
    correctAnswers?: string;
    incorrectAnswers?: string;
    currentImage?: string;
}
