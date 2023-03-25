import React from "react";
import Question from "../../components/question";
import QuestionButtons from "../../components/answerButtons";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { answerQuestion, nextQuestion } from "../../store/quiz/quizReducer";
import {
  getCurrentActivity,
  getQuiz,
  getCurrentQuestion,
  getCurrentQuestionIndex,
} from "../../store/quiz/quizSelector";
import { useNavigate } from "react-router-dom";
import { route } from "../../routes";

const QuestionScreen = () => {
  const quiz = useAppSelector(getQuiz);
  const activity = useAppSelector(getCurrentActivity);
  const question = useAppSelector(getCurrentQuestion);
  const currentQuestion = useAppSelector(getCurrentQuestionIndex);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isLastQuestion = currentQuestion + 1 === activity?.questions.length;
  const userHasAnswered = question?.user_answer !== undefined;
  const userCorrect =
    userHasAnswered && question.user_answer === question.is_correct;

  const onAnswer = (answer: boolean) => {
    dispatch(answerQuestion(answer));
  };

  const onNextQuestion = () => {
    dispatch(nextQuestion());
  };

  const onResults = () => {
    navigate(route.results);
  };

  const getQuestionColor = () => {
    if (userHasAnswered) {
      return userCorrect ? "green" : "red";
    }
    return "blue";
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
        variant={getQuestionColor()}
        question={userHasAnswered ? question.feedback : question.stimulus}
      />
      <QuestionButtons
        isLastQuestion={isLastQuestion}
        userCorrect={userCorrect}
        userHasAnswered={userHasAnswered}
        onAnswer={onAnswer}
        onNextQuestion={onNextQuestion}
        onResults={onResults}
      />
    </>
  );
};

export default QuestionScreen;
