import QuestionTimer from "./QuestionTimer";
import Answer from "./Answer";

function QuesAns({ onSkipAnswer, questionText, allAnswers, selectedAnswer, answerStateFromQuiz, onSelectAnswer }) {
   

  return (
    <div id="question">
      <QuestionTimer
        timeOut={20000}
        onTimeOut={onSkipAnswer}
      />
      <h2>{questionText}</h2>
      <Answer
        answers={allAnswers}
        selectedAns={selectedAnswer}
        answerStateProp={answerStateFromQuiz}
        onSelect={onSelectAnswer}
      />
    </div>
  );
}

export default QuesAns;
