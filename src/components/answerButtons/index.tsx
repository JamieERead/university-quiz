import { Button } from "../buttons/styles";

type Props = {
  isLastQuestion: boolean;
  userHasAnswered: boolean;
  userCorrect: boolean;
  onAnswer: (answer: boolean) => void;
  onNextQuestion: () => void;
  onResults: () => void;
};

const AnswerButtons: React.FC<Props> = ({
  isLastQuestion,
  userHasAnswered,
  userCorrect,
  onAnswer,
  onNextQuestion,
  onResults,
}) => {
  if (userHasAnswered) {
    return (
      <div className="conatiner">
        <div className="row">
          <p>
            {userCorrect
              ? "You got it right! Check above for the correct answer."
              : "Nope, check above for the correct answer."}
          </p>
        </div>
        <div className="row">
          {isLastQuestion ? (
            <Button buttonType="blue" onClick={onResults}>
              Results
            </Button>
          ) : (
            <Button buttonType="blue" onClick={onNextQuestion}>
              Next Question
            </Button>
          )}
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
