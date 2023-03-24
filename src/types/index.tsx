export interface Quiz {
  name: string;
  heading: string;
  activities: Activity[];
  currentQuestion: number;
  selectedActivity: string;
}

export interface Activity {
  activity_name: string;
  order: number;
  questions: ActivityQuestion[];
}

export interface ActivityQuestion {
  is_correct?: boolean;
  stimulus?: string;
  order: number;
  // user_answers: boolean[]; Decided not to use an array as it's not necessary
  user_answer: boolean;
  feedback: string;
  round_title?: string;
  questions?: QuestionQuestion[];
}

export interface QuestionQuestion {
  is_correct: boolean;
  stimulus: string;
  order: number;
  user_answers: boolean[];
  feedback: string;
}
