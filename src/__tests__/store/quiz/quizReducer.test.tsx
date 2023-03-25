import quizReducer, {
  onQuizLoad,
  setActivity,
  answerQuestion,
  nextQuestion,
  nextRound,
  resetQuiz,
} from "../../../store/quiz/quizReducer";
import { Quiz } from "../../../types";

describe("quizReducer", () => {
  const initialState: Quiz = {
    name: "",
    heading: "",
    activities: [],
    selectedActivity: "",
    currentQuestion: 0,
    currentRound: null,
  };

  it("should handle onQuizLoad", () => {
    const quiz: Quiz = {
      name: "Test Quiz",
      heading: "Test Heading",
      activities: [
        {
          activity_name: "Test Activity",
          roundBased: false,
          order: 1,
          questions: [
            {
              is_correct: false,
              stimulus: "I really enjoy *to play football* with friends.",
              order: 1,
              feedback: "I really enjoy *playing football* with friends.",
            },
          ],
        },
      ],
      selectedActivity: "",
      currentQuestion: 0,
      currentRound: null,
    };
    const action = { type: onQuizLoad.type, payload: quiz };
    const expectedState: Quiz = {
      ...initialState,
      ...quiz,
    };
    expect(quizReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle setActivity", () => {
    const activityName = "Test Activity";
    const action = { type: setActivity.type, payload: activityName };
    const expectedState: Quiz = {
      ...initialState,
      selectedActivity: activityName,
    };
    expect(quizReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle answerQuestion", () => {
    const state: Quiz = {
      ...initialState,
      activities: [
        {
          activity_name: "Test Activity",
          roundBased: false,
          order: 1,
          questions: [
            {
              is_correct: false,
              stimulus: "I really enjoy *to play football* with friends.",
              order: 1,
              feedback: "I really enjoy *playing football* with friends.",
            },
          ],
        },
      ],
      selectedActivity: "Test Activity",
      currentQuestion: 0,
      currentRound: null,
    };
    const answer = false;
    const action = { type: answerQuestion.type, payload: answer };
    const expectedState: Quiz = {
      ...state,
      activities: [
        {
          activity_name: "Test Activity",
          roundBased: false,
          order: 1,
          questions: [
            {
              is_correct: false,
              stimulus: "I really enjoy *to play football* with friends.",
              order: 1,
              feedback: "I really enjoy *playing football* with friends.",
              user_answer: false,
            },
          ],
        },
      ],
    };
    expect(quizReducer(state, action)).toEqual(expectedState);
  });

  it("should handle nextQuestion", () => {
    const state: Quiz = {
      ...initialState,
      currentQuestion: 0,
    };
    const action = { type: nextQuestion.type };
    const expectedState: Quiz = {
      ...state,
      currentQuestion: 1,
    };
    expect(quizReducer(state, action)).toEqual(expectedState);
  });

  it("should handle nextRound", () => {
    const state: Quiz = {
      ...initialState,
      currentQuestion: 2,
      currentRound: 1,
    };
    const action = { type: nextRound.type };
    const expectedState: Quiz = {
      ...state,
      currentQuestion: 0,
      currentRound: 2,
    };
    expect(quizReducer(state, action)).toEqual(expectedState);
  });

  it("should handle resetQuiz", () => {
    const state: Quiz = {
      name: "Test Quiz",
      heading: "Test Heading",
      activities: [],
      selectedActivity: "Test Activity",
      currentQuestion: 2,
      currentRound: 1,
    };
    const action = { type: resetQuiz.type };
    const expectedState: Quiz = {
      ...state,
      selectedActivity: "",
      currentQuestion: 0,
      currentRound: null,
    };
    expect(quizReducer(state, action)).toEqual(expectedState);
  });
});
