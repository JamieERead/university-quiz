import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import { route } from "../../routes";
import {
  getCurrentActivity,
  getCurrentRound,
} from "../../store/quiz/quizSelector";

const RoundScreen: React.FC = () => {
  const activity = useAppSelector(getCurrentActivity);
  const round = useAppSelector(getCurrentRound);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(route.question);
    }, 3000);
  }, [navigate]);

  if (!activity) {
    return <h1>Something went wrong</h1>;
  }

  return (
    <>
      <div className="container pad">
        <h2>{activity.activity_name}</h2>
        <h1 className="large">{round !== null && `Round ${round + 1}`}</h1>
      </div>
    </>
  );
};

export default RoundScreen;
