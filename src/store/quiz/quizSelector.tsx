import { RootState } from "..";
import { Quiz } from "../../types";

export const getQuiz = (state: RootState): Quiz => {
  return state.quiz;
};
