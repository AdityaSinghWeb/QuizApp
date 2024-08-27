import { useCallback, useState } from "react";
import QuesAns from "./QuesAns";
import Summary from "./Summary";
import { Questions } from "../questions";

function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === Questions.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevAnswer) => {
      return [...prevAnswer, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return <Summary selectedUserAnswer={userAnswers} />;
  }

  return (
    <div id="quiz">
      <QuesAns
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSkipAnswer={handleSkipAnswer}
        onSelectAnswer={handleSelectAnswer}
      />
    </div>
  );
}

export default Quiz;
