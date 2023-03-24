import { createSlice } from "@reduxjs/toolkit";
import { Quiz } from "../../types";

const initialState: Quiz = {
  name: "",
  heading: "",
  activities: [],
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
  },
});

// Action creators are generated for each case reducer function
export const { onQuizLoad } = quizSlice.actions;

export default quizSlice.reducer;
