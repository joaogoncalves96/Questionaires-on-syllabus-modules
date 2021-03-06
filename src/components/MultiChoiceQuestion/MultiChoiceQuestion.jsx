import { useEffect, useState } from "react";
import styles from "./MultiChoiceQuestion.module.css";

function MultiChoiceQuestion(props) {
   const { title, possibleAnswers, correctAnswers, score } = props;

   const [checked, setChecked] = useState(null);
   const [isCorrect, setIsCorrect] = useState("");
   const [isToggled, setIsToggled] = useState(false);
   // const [points, setPoints] = useState(0);

   function onValueChange(e) {
      setChecked(e.target.value);
   }

   function handleSubmit(e) {
      e.preventDefault();
      setIsToggled(true);
      const form = e.target;
      const inputs = Array.from(form.querySelectorAll("input"));
      const answers = inputs.map((input) => {
         return { value: input.value, checked: input.checked };
      });

      const selectedAnswers = answers.filter((answer) => answer.checked === true);

      for (let i = 0; i < correctAnswers.length; i++) {
         if (selectedAnswers.length !== correctAnswers.length) {
            setIsCorrect(false);
            return;
         }
         if (correctAnswers[i] === selectedAnswers[i].value) {
            setIsCorrect(true);
            score(1);
            return;
         } else {
            setIsCorrect(false);
            return;
         }
      }
   }

   return (
      <form onSubmit={handleSubmit} className={styles.questionCard}>
         <h3 className={styles.questionTitle}>{title}</h3>
         <div className={styles.possibleAnswers}>
            {!isToggled &&
               possibleAnswers?.map((answer) => {
                  return (
                     <div key={answer.id} className={styles.answer}>
                        <input
                           id={answer.id}
                           type="checkbox"
                           name="answer"
                           value={answer}
                           onChange={onValueChange}
                           required={possibleAnswers.length < 1}
                        />
                        <label>{answer}</label>
                     </div>
                  );
               })}
         </div>
         {isToggled ? (
            <div className={styles.correctOrIncorrect}>
               {isCorrect ? (
                  <div className={styles.correct}>CORRECT ??????????</div>
               ) : (
                  <div className={styles.incorrect}>INCORRECT ???????</div>
               )}{" "}
               <div className={styles.correctAnswer}>Correct answer ?????? {correctAnswers}</div>{" "}
            </div>
         ) : (
            <button type="submit" className={styles.buttonCheck}>
               Check
            </button>
         )}
      </form>
   );
}

export default MultiChoiceQuestion;

//             <form onSubmit={handleSubmit} className={styles.checkboxes}>
//                <ul>
//                   {answers[questionIndex]?.map((answer, index) => (
//                      <label>
//                         <input
//                            type="checkbox"
//                            //  name={answer.id}
//                            value={answer}
//                            onChange={() => handleCheckboxChange(answer)}
//                         />
//                         {answer}
//                      </label>
//                   ))}
//                </ul>
//                <button className={styles.nextQuestionButton} type="submit">
//                   Next Question
//                </button>
//             </form>
//          </div>
//       </div>
//    )}
// </div>
