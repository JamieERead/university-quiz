import { RootState } from "..";
import { Activity, ActivityQuestion, Quiz } from "../../types";

export const getQuiz = (state: RootState): Quiz => {
  return state.quiz;
};

export const getCurrentRound = (state: RootState): number | null => {
  return state.quiz.currentRound;
};

export const getCurrentActivity = (state: RootState): Activity | null => {
  const current = state.quiz.selectedActivity;
  const found = state.quiz.activities.find(
    (item) => item.activity_name === current
  );

  if (!found) {
    return null;
  }

  return found;
};

export const getCurrentQuestionIndex = (state: RootState) =>
  state.quiz.currentQuestion;

export const getCurrentQuestion = (
  state: RootState
): ActivityQuestion | null => {
  const activity = getCurrentActivity(state);
  const { currentQuestion, currentRound } = state.quiz;

  let found = activity?.questions[currentQuestion];

  // Get the round question instead
  if (activity?.roundBased && currentRound !== null) {
    const round = activity?.questions[currentRound];
    if (round.questions) {
      found = round.questions[currentQuestion];
    }
  }

  if (!found) {
    return null;
  }

  return found;
};
