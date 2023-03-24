import { ActivityQuestion } from "../../types";
import { Button } from "./styles";

type Props = {
  userHasAnswered: boolean;
  userCorrect: boolean;
  onAnswer: (answer: boolean) => void;
  onNextQuestion: () => void;
};

const AnswerButtons: React.FC<Props> = ({
  userHasAnswered,
  userCorrect,
  onAnswer,
  onNextQuestion,
}) => {
  if (userHasAnswered) {
    return (
      <div className="conatiner">
        <div className="row">
          <p>
            {userCorrect
              ? "You got it right! Check above for the correct format."
              : "Nope, check above for the correct answer."}
          </p>
        </div>
        <div className="row">
          <Button buttonType="blue" onClick={onNextQuestion}>
            Next Question
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="conatiner">
      <div className="row">
        <Button buttonType="green" onClick={() => onAnswer(true)}>
          Correct
        </Button>
        <Button buttonType="red" onClick={() => onAnswer(false)}>
          Incorrect
        </Button>
      </div>
    </div>
  );
};

export default AnswerButtons;
