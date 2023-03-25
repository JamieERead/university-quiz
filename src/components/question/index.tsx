import ReactMarkdown from "react-markdown";
import { memo } from "react";
import { QuestionColors, QuestionContainer } from "./styles";

type Props = {
  variant: QuestionColors;
  question?: string;
};

const Question = memo(({ variant, question }: Props) => {
  return (
    <div className="container">
      <QuestionContainer variant={variant}>
        <ReactMarkdown children={question as string} />
      </QuestionContainer>
    </div>
  );
});

export default Question;
