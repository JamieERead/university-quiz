import { memo } from "react";
import { QuestionContainer, Button } from "./styles";
import ReactMarkdown from "react-markdown";

type Props = {
  question?: string;
};

const Question = memo(({ question }: Props) => (
  <>
    <QuestionContainer>
      <ReactMarkdown children={question as string} />
    </QuestionContainer>
    <div className="conatiner">
      <div className="row">
        <Button buttonType="correct">Correct</Button>
        <Button>Incorrect</Button>
      </div>
    </div>
  </>
));

export default Question;
