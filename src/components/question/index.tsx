import ReactMarkdown from "react-markdown";
import { memo } from "react";
import { QuestionColors, QuestionContainer } from "./styles";

type Props = {
  variant: QuestionColors;
  question?: string;
};

const Question = memo(({ variant, question }: Props) => {
  return (
    <>
      <QuestionContainer variant={variant}>
        <ReactMarkdown children={question as string} />
      </QuestionContainer>
    </>
  );
});

export default Question;
