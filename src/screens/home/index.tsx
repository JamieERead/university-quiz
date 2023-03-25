import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ActivityList from "../../components/activityList";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { route } from "../../routes";
import {
  onQuizLoad,
  resetQuiz,
  setActivity,
} from "../../store/quiz/quizReducer";
import { getQuiz } from "../../store/quiz/quizSelector";
import { Activity } from "../../types";

const HomeScreen: React.FC = () => {
  const navigate = useNavigate();
  const quiz = useAppSelector(getQuiz);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const abortController = new AbortController();
    fetch("/api/getQuiz", { signal: abortController.signal })
      .then((res) => res.json())
      .then((data) => {
        dispatch(resetQuiz());
        dispatch(onQuizLoad(data));
      });

    return () => {
      // This will cancel the fetch request when the effect is unmounted
      abortController.abort();
    };
  }, [dispatch]);

  const goToActivity = (activity: Activity) => {
    dispatch(setActivity(activity.activity_name));
    navigate(route.question);
  };

  return (
    <>
      <div className="container pad text-center">
        <p>CAE Home</p>
        <h1 className="large">{quiz.name}</h1>
        <h3>{quiz.heading}</h3>
      </div>
      <ActivityList activities={quiz.activities} goToActivity={goToActivity} />
    </>
  );
};

export default HomeScreen;
