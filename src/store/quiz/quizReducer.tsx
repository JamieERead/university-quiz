import { createSlice } from "@reduxjs/toolkit";
import { Quiz } from "../../types";

const initialState: Quiz = {
  name: "",
  heading: "",
  activities: [],
  selectedActivity: "",
  currentQuestion: 0,
  currentRound: null,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    onQuizLoad: (state, action: { payload: Quiz }) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    setActivity: (state, action: { payload: string }) => {
      state.selectedActivity = action.payload;
    },
    answerQuestion: (state, action: { payload: boolean }) => {
      const answer = action.payload;
      const { currentQuestion, currentRound } = state;
      const activity = state.activities.find(
        (item) => item.activity_name === state.selectedActivity
      );

      let found = activity?.questions[currentQuestion];

      // Update the round question instead
      if (activity?.roundBased && currentRound !== null) {
        const round = activity?.questions[currentRound];
        if (round.questions) {
          found = round.questions[currentQuestion];
        }
      }

      if (found) {
        found.user_answer = answer;
      }
    },
    nextQuestion: (state) => {
      state.currentQuestion = state.currentQuestion + 1;
    },
    nextRound: (state) => {
      state.currentQuestion = 0;
      state.currentRound =
        state.currentRound === null ? 0 : state.currentRound + 1;
    },
    resetQuiz: (state) => {
      return {
        ...state,
        selectedActivity: "",
        currentQuestion: 0,
        currentRound: null,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  onQuizLoad,
  setActivity,
  answerQuestion,
  nextQuestion,
  nextRound,
  resetQuiz,
} = quizSlice.actions;

export default quizSlice.reducer;
