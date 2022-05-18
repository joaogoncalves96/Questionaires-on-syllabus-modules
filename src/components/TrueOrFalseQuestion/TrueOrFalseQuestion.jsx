import styles from "./TrueOrFalseQuestion.module.css";
import { useEffect, useState } from "react";

function TrueOrFalseQuestion(props) {
   const { title, possibleAnswers, answer, score } = props;

   const [checked, setChecked] = useState(null);
   const [isCorrect, setIsCorrect] = useState("");
   const [isToggled, setIsToggled] = useState(false);
   const [points, setPoints] = useState(0);

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
            // console.log("correct");
            setIsCorrect(true);
            score(1);
            return;
         } else {
            setIsCorrect(false);
            // console.log("incorrect");
            return;
         }
      }
   }

   // console.log(answer.map((answer) => answer.text));
   // console.log(isToggled);

   return (
      <form onSubmit={handleSubmit} className={styles.questionCard}>
         <h3 className={styles.questionTitle}>{title}</h3>
         <div className={styles.possibleAnswers}>
            {!isToggled &&
               possibleAnswers?.map((answer) => {
                  return (
                     <div key={answer.id}>
                        <input id={answer.id} type="radio" name="answer" value={answer} onChange={onValueChange} />
                        <label>{answer}</label>
                     </div>
                  );
               })}
         </div>
         {isToggled ? (
            <div>
               {isCorrect ? "CORRECT ✔️" : "INCORRECT ❌"}{" "}
               <span>Correct answer is: {answer.map((answer) => answer.text)}</span>
            </div>
         ) : (
            <button type="submit">Check</button>
         )}
      </form>
   );
}
export default TrueOrFalseQuestion;
