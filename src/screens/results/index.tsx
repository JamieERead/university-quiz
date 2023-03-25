import React from "react";
import { useNavigate } from "react-router-dom";
import ResultsList from "../../components/resultsList";
import { useAppSelector } from "../../hooks/redux";
import { route } from "../../routes";
import { getCurrentActivity } from "../../store/quiz/quizSelector";

const ResultsScreen = () => {
  const activity = useAppSelector(getCurrentActivity);
  const navigate = useNavigate();

  const onBackHome = () => {
    navigate(route.home);
  };

  if (!activity) {
    return <h1>Something went wrong</h1>;
  }

  return (
    <>
      <div className="container pad text-center">
        <h2>{activity.activity_name}</h2>
        <h1 className="large">Results</h1>
      </div>
      <ResultsList activity={activity} onBackHome={onBackHome} />
    </>
  );
};

export default ResultsScreen;
