export interface Quiz {
  name: string;
  heading: string;
  activities: Activity[];
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
  user_answers?: any[];
  feedback?: string;
  round_title?: string;
  questions?: QuestionQuestion[];
}

export interface QuestionQuestion {
  is_correct: boolean;
  stimulus: string;
  order: number;
  user_answers: any[];
  feedback: string;
}
