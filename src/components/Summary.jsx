import quizCompleteLogo from "../assets/quiz-complete.png";
import { Questions } from "../questions";

function Summary({ selectedUserAnswer }) {
  const skippedAnswers = selectedUserAnswer.filter((answer) => answer === null);
  const correctAnswer = selectedUserAnswer.filter(
    (answer, index) => answer === Questions[index].answers[0]
  );

  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / selectedUserAnswer.length) * 100
  );
  const correctAnswerShare = Math.round(
    (correctAnswer.length / selectedUserAnswer.length) * 100
  );
  const IncorrectAnswerShare = 100 - skippedAnswersShare - correctAnswerShare;

  return (
    <div id="summary">
      <img src={quizCompleteLogo} alt="Quiz is complete logo" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShare}%</span>
          <span className="text">Skipped Questions</span>
        </p>
        <p>
          <span className="number">{correctAnswerShare}%</span>
          <span className="text">Answered Correctly</span>
        </p>
        <p>
          <span className="number">{IncorrectAnswerShare}%</span>
          <span className="text">Answered Incorrectly</span>
        </p>
      </div>
      <ol>
        {selectedUserAnswer.map((answer, index) => {
          let cssClass = "user-answer";

          if (answer === Questions[index].answers[0]) {
            cssClass += " correct";
          } else if (answer === null) {
            cssClass += " skipped";
          } else {
            cssClass += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{Questions[index].text}</p>
              <p className={cssClass}>{answer ?? "skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Summary;
