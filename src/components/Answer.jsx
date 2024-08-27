import { useRef } from "react";

function Answer({ answers, selectedAns, answerStateProp, onSelect }) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((ans) => {
        let cssClass = "";
        let isSelected = selectedAns === ans;

        if (answerStateProp === "answered" && isSelected) {
          cssClass = "selected";
        }

        if (
          (answerStateProp === "correct" || answerStateProp === "wrong") &&
          isSelected
        ) {
          cssClass = answerStateProp;
        }

        return (
          <li key={ans} className="answer">
            <button
              className={cssClass}
              onClick={() => onSelect(ans)}
              disabled={answerStateProp !== ""}
            >
              {ans}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default Answer;
