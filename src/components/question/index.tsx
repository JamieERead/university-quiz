import ReactMarkdown from "react-markdown";
import { memo } from "react";
import { QuestionContainer } from "./styles";

type Props = {
  showAnswer: boolean;
  question?: string;
};

const Question = memo(({ showAnswer, question }: Props) => (
  <>
    <QuestionContainer showAnswer={showAnswer}>
      <ReactMarkdown children={question as string} />
    </QuestionContainer>
  </>
));

export default Question;
