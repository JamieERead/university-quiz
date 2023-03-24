import React from "react";
import Question from "../../components/question";
import { useAppSelector } from "../../hooks/redux";
import {
  getCurrentActivity,
  getQuiz,
  getCurrentQuestion,
} from "../../store/quiz/quizSelector";

const QuestionScreen = () => {
  const quiz = useAppSelector(getQuiz);
  const activity = useAppSelector(getCurrentActivity);
  const question = useAppSelector(getCurrentQuestion);
  console.log(question);

  // return home something went wrong
  if (!activity || !question) {
    return <h1>Something went wrong</h1>;
  }

  return (
    <>
      <div className="container pad">
        <h2>{activity.activity_name}</h2>
        <h1 className="large">{`Q${quiz.currentQuestion + 1}.`}</h1>
      </div>
      <Question question={question.stimulus} />
    </>
  );
};

export default QuestionScreen;
