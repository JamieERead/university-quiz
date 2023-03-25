import React from "react";
import { Button } from "../buttons/styles";

type Props = {
  isLastQuestion: boolean;
  userCorrect: boolean;
  hasRoundsLeft: boolean | undefined;
  onNextRound: () => void;
  onNextQuestion: () => void;
  onResults: () => void;
};

const AnswerResult: React.FC<Props> = ({
  isLastQuestion,
  userCorrect,
  hasRoundsLeft,
  onNextRound,
  onNextQuestion,
  onResults,
}) => {
  let button = {
    title: "Next Question",
    action: onNextQuestion,
  };

  if (isLastQuestion) {
    button = {
      title: "Results",
      action: onResults,
    };
  }

  if (isLastQuestion && hasRoundsLeft) {
    button = {
      title: "Next Round",
      action: onNextRound,
    };
  }

  return (
    <div className="container pad">
      <div className="row">
        <p>
          {userCorrect
            ? "You got it right! Check above for the correct answer."
            : "Nope, check above for the correct answer."}
        </p>
      </div>
      <div className="row">
        <Button buttonType="blue" onClick={button.action}>
          {button.title}
        </Button>
      </div>
    </div>
  );
};

export default AnswerResult;
