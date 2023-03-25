export interface Quiz {
  name: string;
  heading: string;
  activities: Activity[];
  currentQuestion: number;
  selectedActivity: string;
  currentRound: number | null;
}

export interface Activity {
  activity_name: string;
  order: number;
  roundBased: boolean;
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
  questions?: ActivityQuestion[];
}
