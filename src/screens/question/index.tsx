import React from "react";
import Question from "../../components/question";
import QuestionButtons from "../../components/answerButtons";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { answerQuestion, nextQuestion } from "../../store/quiz/quizReducer";
import {
  getCurrentActivity,
  getQuiz,
  getCurrentQuestion,
} from "../../store/quiz/quizSelector";

const QuestionScreen = () => {
  const quiz = useAppSelector(getQuiz);
  const activity = useAppSelector(getCurrentActivity);
  const question = useAppSelector(getCurrentQuestion);
  const dispatch = useAppDispatch();
  const userHasAnswered = question?.user_answer !== undefined;
  const userCorrect =
    userHasAnswered && question.user_answer === question.is_correct;

  const onAnswer = (answer: boolean) => {
    dispatch(answerQuestion(answer));
  };

  const onNextQuestion = () => {
    dispatch(nextQuestion());
  };

  if (!activity || !question) {
    return <h1>Something went wrong</h1>;
  }

  return (
    <>
      <div className="container pad">
        <h2>{activity.activity_name}</h2>
        <h1 className="large">{`Q${quiz.currentQuestion + 1}.`}</h1>
      </div>
      <Question
        showAnswer={userHasAnswered && !userCorrect}
        question={userHasAnswered ? question.feedback : question.stimulus}
      />
      <QuestionButtons
        userCorrect={userCorrect}
        userHasAnswered={userHasAnswered}
        onAnswer={onAnswer}
        onNextQuestion={onNextQuestion}
      />
    </>
  );
};

export default QuestionScreen;
