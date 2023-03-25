import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../screens/home";
import QuestionScreen from "../screens/question";
import ResultsScreen from "../screens/results";
import RoundScreen from "../screens/round";

export const route = {
  home: "/",
  question: "/question",
  results: "/results",
  round: "/round",
};

const router = createBrowserRouter([
  {
    path: route.home,
    element: <HomeScreen />,
  },
  {
    path: route.question,
    element: <QuestionScreen />,
  },
  {
    path: route.results,
    element: <ResultsScreen />,
  },
  {
    path: route.round,
    element: <RoundScreen />,
  },
]);

export default router;
