import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ActivityList from "../../components/activityList";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { route } from "../../routes";
import { onQuizLoad } from "../../store/quiz/quizReducer";
import { getQuiz } from "../../store/quiz/quizSelector";

const HomeScreen: React.FC = () => {
  const navigate = useNavigate();
  const quiz = useAppSelector(getQuiz);
  const dispatch = useAppDispatch();
  console.log(quiz);

  useEffect(() => {
    const abortController = new AbortController();
    fetch("/api/getQuiz", { signal: abortController.signal })
      .then((res) => res.json())
      .then((data) => dispatch(onQuizLoad(data)));

    return () => {
      // This will cancel the fetch request when the effect is unmounted
      abortController.abort();
    };
  }, []);

  const goToResults = () => {};

  return (
    <>
      <section>
        <div className="container pad">
          <div className="text-center">
            <p>CAE Home</p>
            <h1>{quiz.name}</h1>
            <h3>{quiz.heading}</h3>
          </div>
        </div>
      </section>
      <ActivityList activities={quiz.activities} />
    </>
  );
};

export default HomeScreen;
