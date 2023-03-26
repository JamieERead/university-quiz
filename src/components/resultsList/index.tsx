import { ReactElement } from "react";
import { Activity, ActivityQuestion } from "../../types";
import { Button } from "../buttons/styles";
import { Result, ResultsContainer } from "./styles";

type Props = {
  activity: Activity;
  onBackHome: () => void;
};

const ResultsList: React.FC<Props> = ({ activity, onBackHome }) => {
  const renderResults = (questions: ActivityQuestion[]): ReactElement => {
    // Recursive function to render all the round based and normal results
    return (
      <>
        {questions.map((item, index) => (
          <>
            <Result key={index}>
              {item.round_title ? (
                <div className="row">{item.round_title}</div>
              ) : (
                <>
                  <span>Q{index + 1}</span>
                  <span>
                    {item.is_correct === item.user_answer ? "Correct" : "-"}
                  </span>
                </>
              )}
            </Result>
            {item.questions && renderResults(item.questions)}
          </>
        ))}
      </>
    );
  };

  return (
    <>
      <ResultsContainer className="container">
        {renderResults(activity.questions)}
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
