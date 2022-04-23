export interface Answer {
  type?: string;
  value: string;
  isCorrect: boolean;
}

export interface Image {
  url: string;
  description: string;
}

export interface Question {
  id: string;
  label: string;
  images: Image[];
  familyLink: string;
  answers: Answer[];
  correctAnswers?: number;
  incorrectAnswers?: number;
  currentImage?: number;
  showFamilyLink?: boolean;
}
