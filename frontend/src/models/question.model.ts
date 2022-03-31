export interface Answer {
    type?: string;
    value: string;
    isCorrect: boolean;
}

export interface Question {
    id: string;
    label: string;
    imageUrls: string[];
    answers: Answer[];
    correctAnswers?: number;
    incorrectAnswers?: number;
    currentImage?: number;
}
