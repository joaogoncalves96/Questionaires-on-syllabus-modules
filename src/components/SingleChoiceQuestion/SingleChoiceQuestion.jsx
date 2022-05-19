import { useEffect, useState } from "react";
import styles from "./SingleChoiceQuestion.module.css";

function SingleChoiceQuestion(props) {
   const { title, possibleAnswers, answer, score } = props;

   const [checked, setChecked] = useState(null);
   const [isCorrect, setIsCorrect] = useState("");
   const [isToggled, setIsToggled] = useState(false);
   // const [points, setPoints] = useState(0);

   function onValueChange(e) {
      setChecked(e.target.value);
   }
   // console.log(checked);

   function handleSubmit(e) {
      e.preventDefault();
      setIsToggled(true);
      const form = e.target;
      const inputs = Array.from(form.querySelectorAll("input"));
      const answers = inputs.map((input) => input.value);
      // console.log(answers);

      for (let i = 0; i < answers.length; i++) {
         if (answers[i] === checked) {
            score(1);
            setIsCorrect(true);
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
                           type="radio"
                           name="answer"
                           value={answer}
                           onChange={onValueChange}
                           required
                        />
                        <label>{answer}</label>
                     </div>
                  );
               })}
         </div>
         {isToggled ? (
            <div className={styles.correctOrIncorrect}>
               {isCorrect ? (
                  <div className={styles.correct}>CORRECT ✔️👍</div>
               ) : (
                  <div className={styles.incorrect}>INCORRECT ❌👎</div>
               )}{" "}
               <div className={styles.correctAnswer}>Correct answer ➡️ {answer.map((answer) => answer.text)}</div>
            </div>
         ) : (
            <button type="submit" className={styles.buttonCheck}>
               Check
            </button>
         )}
      </form>
   );
}
export default SingleChoiceQuestion;
