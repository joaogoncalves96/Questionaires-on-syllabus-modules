import { useEffect, useState } from "react";
import styles from "./MultiChoiceQuestion.module.css";

function MultiChoiceQuestion() {
   const [questions, setQuestions] = useState([]);
   const [answers, setAnswers] = useState([]);
   const [questionIndex, setQuestionIndex] = useState(0);

   const [score, setScore] = useState(0);
   const [showFinalResult, setShowFinalResult] = useState(false);
   const [checked, setChecked] = useState([true, true, true, true, true]);

   useEffect(() => {
      async function loadQuestions() {
         const response = await fetch(`http://localhost:3001/questions`);
         const json = await response.json();
         const filteredQuestions = json.filter((question) => question.type === "multiple-choice");
         const questions = filteredQuestions.map((question) => question.title);
         const answers = filteredQuestions.map((question) => question.answers);

         setQuestions(questions);
         setAnswers(answers);
      }
      loadQuestions();
   }, []);

   //    function optionClicked() {
   //       for (const answer of answers) {
   //          if (isCorrect) {
   //             setScore(score + 1);
   //          }

   //          if (questionIndex + 1 < questions.length) {
   //             setQuestionIndex(questionIndex + 1);
   //          } else {
   //             setShowFinalResult(true);
   //          }
   //       }
   //    }

   function restartGame() {
      setScore(0);
      setQuestionIndex(0);
      setShowFinalResult(false);
   }

   //    const handleChange = (e) => {
   //       setChecked(!checked);
   //       console.log(e, checked);
   //    };

   const handleChange = (position) => {
      const updatedCheckedState = checked.map((item, index) => (index === position ? !item : item));

      setChecked(updatedCheckedState);
      console.log(position, checked);
   };

   function handleClick(e) {
      console.log(e);
   }

   return (
      <div className={styles.app}>
         {showFinalResult ? (
            <div className={styles.finalResults}>
               <h1>Final Results</h1>
               <h2>
                  {score} out of {questions.length} correct ➡️ ({(score / questions.length) * 100}%)
               </h2>
               <button className={styles.restartGame} onClick={() => restartGame()}>
                  Restart game
               </button>
            </div>
         ) : (
            <div className={styles.questionCard}>
               <h3 className={styles.category}>Multi Choice Questions</h3>
               <h4 className={styles.currentScore}>Current score: {score}</h4>
               <h4 className={styles.questionTitle}>{questions[questionIndex]}</h4>
               <div className={styles.answers}>
                  <div class="form-row">
                     <ul>
                        {answers[questionIndex]?.map((answer, index) => (
                           <label for="renderedChecked">
                              <input
                                 type="checkbox"
                                 id="renderedChecked"
                                 name="subscribe"
                                 value="rendered-checked"
                                 //  checked={checked[index]}
                                 onChange={() => handleChange(index)}
                              />
                              {answer}
                           </label>
                        ))}
                     </ul>
                  </div>
               </div>
               <button className={styles.nextQuestionButton} onClick={() => handleClick()}>
                  Next Question
               </button>
            </div>
         )}
      </div>
   );
}
export default MultiChoiceQuestion;
