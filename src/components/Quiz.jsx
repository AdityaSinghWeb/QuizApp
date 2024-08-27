import { useCallback, useState } from "react";
import { Questions } from "../questions";
import quizCompleteLogo from "../assets/quiz-complete.png";
import QuesAns from "./QuesAns";

function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState("");

  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;
  const quizIsComplete = activeQuestionIndex === Questions.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setAnswerState("answered");

    setUserAnswers((prevAnswer) => {
      return [...prevAnswer, selectedAnswer];
    });

    setTimeout(() => {
      if (Questions[activeQuestionIndex].answers[0] === selectedAnswer) {
        setAnswerState("correct");
      } else {
        setAnswerState("wrong");
      }
      setTimeout(() => {
        setAnswerState("");
      }, 2000);
    }, 1000);
  },
  [activeQuestionIndex]); 

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteLogo} alt="Quiz is complete logo" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <QuesAns
        key={activeQuestionIndex}
        questionText={Questions[activeQuestionIndex].text}
        onSkipAnswer={handleSkipAnswer}
        allAnswers={Questions[activeQuestionIndex].answers}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
        answerStateFromQuiz={answerState}
        onSelectAnswer={handleSelectAnswer}
      />
    </div>
  );
}

export default Quiz;
