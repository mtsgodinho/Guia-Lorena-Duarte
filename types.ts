
export enum FunnelStep {
  LANDING = 'landing',
  QUIZ = 'quiz',
  ANALYZING = 'analyzing',
  RESULTS = 'results'
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
}

export interface QuizAnswer {
  questionId: number;
  answer: string;
}
