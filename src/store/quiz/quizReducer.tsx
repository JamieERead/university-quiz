import { createSlice } from "@reduxjs/toolkit";
import { Quiz } from "../../types";

const initialState: Quiz = {
  name: "",
  heading: "",
  activities: [],
  selectedActivity: "",
  currentQuestion: 0,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    onQuizLoad: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    setActivity: (state, action) => {
      state.selectedActivity = action.payload;
    },
    answerQuestion: (state, action) => {
      const answer = action.payload;
      const activity = state.activities.find(
        (item) => item.activity_name === state.selectedActivity
      );
      const question = activity?.questions[state.currentQuestion];

      if (question) {
        question.user_answer = answer;
      }
    },
    nextQuestion: (state) => {
      state.currentQuestion = state.currentQuestion + 1;
    },
    resetQuiz: (state) => {
      state.selectedActivity = "";
      state.currentQuestion = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  onQuizLoad,
  setActivity,
  answerQuestion,
  nextQuestion,
  resetQuiz,
} = quizSlice.actions;

export default quizSlice.reducer;
