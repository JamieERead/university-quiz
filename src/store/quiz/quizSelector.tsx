import { RootState } from "..";
import { Activity, ActivityQuestion, Quiz } from "../../types";

export const getQuiz = (state: RootState): Quiz => {
  return state.quiz;
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
  const current = state.quiz.currentQuestion;
  const found = activity?.questions[current];

  if (!found) {
    return null;
  }

  return found;
};
