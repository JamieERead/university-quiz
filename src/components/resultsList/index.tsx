import { Activity } from "../../types";
import { Button } from "../buttons/styles";
import { Result, ResultsContainer } from "./styles";

type Props = {
  activity: Activity;
  onBackHome: () => void;
};

const ResultsList: React.FC<Props> = ({ activity, onBackHome }) => {
  return (
    <>
      <ResultsContainer className="container">
        {activity.questions.map((item, index) => (
          <Result key={index}>
            <span>Q{index + 1}</span>
            <span>
              {item.is_correct === item.user_answer ? "Correct" : "-"}
            </span>
          </Result>
        ))}
      </ResultsContainer>
      <div className="row">
        <Button buttonType="blue" onClick={onBackHome}>
          Home
        </Button>
      </div>
    </>
  );
};

export default ResultsList;
