import { Button } from "../buttons/styles";

type Props = {
  onAnswer: (answer: boolean) => void;
};

const AnswerButtons: React.FC<Props> = ({ onAnswer }) => {
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
