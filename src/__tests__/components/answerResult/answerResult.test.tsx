import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import AnswerResult from "../../../components/answerResult";

describe("AnswerResult", () => {
  const onNextQuestion = jest.fn();
  const onResults = jest.fn();
  const onNextRound = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render the correct message when the answer is correct", () => {
    render(
      <AnswerResult
        isLastQuestion={false}
        userCorrect={true}
        hasRoundsLeft={undefined}
        onNextQuestion={onNextQuestion}
        onResults={onResults}
        onNextRound={onNextRound}
      />
    );
    expect(
      screen.getByText("You got it right! Check above for the correct answer.")
    ).toBeInTheDocument();
  });

  it("should render the correct message when the answer is incorrect", () => {
    render(
      <AnswerResult
        isLastQuestion={false}
        userCorrect={false}
        hasRoundsLeft={undefined}
        onNextQuestion={onNextQuestion}
        onResults={onResults}
        onNextRound={onNextRound}
      />
    );
    expect(
      screen.getByText("Nope, check above for the correct answer.")
    ).toBeInTheDocument();
  });

  it('should render the "Next Question" button when it is not the last question', () => {
    render(
      <AnswerResult
        isLastQuestion={false}
        userCorrect={true}
        hasRoundsLeft={undefined}
        onNextQuestion={onNextQuestion}
        onResults={onResults}
        onNextRound={onNextRound}
      />
    );
    const button = screen.getByText("Next Question");
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(onNextQuestion).toHaveBeenCalledTimes(1);
  });

  it('should render the "Results" button when it is the last question', () => {
    render(
      <AnswerResult
        isLastQuestion={true}
        userCorrect={true}
        hasRoundsLeft={undefined}
        onNextQuestion={onNextQuestion}
        onResults={onResults}
        onNextRound={onNextRound}
      />
    );
    const button = screen.getByText("Results");
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(onResults).toHaveBeenCalledTimes(1);
  });

  it('should render the "Next Round" button when it is the last question and there are rounds left', () => {
    render(
      <AnswerResult
        isLastQuestion={true}
        userCorrect={true}
        hasRoundsLeft={true}
        onNextQuestion={onNextQuestion}
        onResults={onResults}
        onNextRound={onNextRound}
      />
    );
    const button = screen.getByText("Next Round");
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(onNextRound).toHaveBeenCalledTimes(1);
  });
});
