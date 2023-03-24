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
    nextQuestion: (state, action) => {
      state.currentQuestion = state.currentQuestion++;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onQuizLoad, setActivity, nextQuestion } = quizSlice.actions;

export default quizSlice.reducer;
