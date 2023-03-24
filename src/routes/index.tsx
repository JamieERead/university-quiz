import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../screens/home";
import QuestionScreen from "../screens/question";
import ResultsScreen from "../screens/results";

export const route = {
  home: "/",
  question: "/question",
  results: "/results",
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
]);

export default router;
