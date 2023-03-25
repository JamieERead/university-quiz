import React from "react";
import Question from "../../components/question";
import QuestionButtons from "../../components/answerButtons";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  answerQuestion,
  nextQuestion,
  nextRound,
} from "../../store/quiz/quizReducer";
import {
  getCurrentActivity,
  getQuiz,
  getCurrentQuestion,
  getCurrentQuestionIndex,
  getCurrentRound,
} from "../../store/quiz/quizSelector";
import { useNavigate } from "react-router-dom";
import { route } from "../../routes";
import AnswerResult from "../../components/answerResult";

const QuestionScreen = () => {
  const quiz = useAppSelector(getQuiz);
  const activity = useAppSelector(getCurrentActivity);
  const round = useAppSelector(getCurrentRound);
  const question = useAppSelector(getCurrentQuestion);
  const currentQuestion = useAppSelector(getCurrentQuestionIndex);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isLastQuestion = currentQuestion + 1 === activity?.questions.length;
  const hasRoundsLeft =
    round !== null &&
    activity?.questions &&
    round + 1 < activity?.questions.length;
  const userHasAnswered = question?.user_answer !== undefined;
  const userCorrect =
    userHasAnswered && question.user_answer === question.is_correct;

  const onNextRound = () => {
    dispatch(nextRound());
    navigate(route.round);
  };

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
        <h2>
          {activity.activity_name}
          {round !== null && ` / Round ${round + 1}`}
        </h2>
        <h1 className="large">{`Q${quiz.currentQuestion + 1}.`}</h1>
      </div>
      <Question
        variant={getQuestionColor()}
        question={userHasAnswered ? question.feedback : question.stimulus}
      />

      {userHasAnswered ? (
        <AnswerResult
          hasRoundsLeft={hasRoundsLeft}
          isLastQuestion={isLastQuestion}
          userCorrect={userCorrect}
          onNextRound={onNextRound}
          onNextQuestion={onNextQuestion}
          onResults={onResults}
        />
      ) : (
        <QuestionButtons onAnswer={onAnswer} />
      )}
    </>
  );
};

export default QuestionScreen;
