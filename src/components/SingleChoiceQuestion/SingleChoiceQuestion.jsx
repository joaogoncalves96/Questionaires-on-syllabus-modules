import { useEffect, useState } from "react";
import styles from "./SingleChoiceQuestion.module.css";

function SingleChoiceQuestion() {
   const [questions, setQuestions] = useState([]);
   const [answers, setAnswers] = useState([]);
   const [questionIndex, setQuestionIndex] = useState(0);

   const [score, setScore] = useState(0);
   const [showFinalResult, setShowFinalResult] = useState(false);

   useEffect(() => {
      async function loadQuestions() {

         const response = await fetch(`http://localhost:3001/questions`);
         const json = await response.json();
         const filteredQuestions = json.filter(question => question.type === "single-choice");
         const questions = filteredQuestions.map((question) => question.title);
         const answers = filteredQuestions.map((question) => question.answers);

         setQuestions(questions);
         setAnswers(answers);
      }
      loadQuestions();
   }, []);

   function optionClicked(isCorrect) {
      if (isCorrect) {
         setScore(score + 1);
      }
      if (questionIndex + 1 < questions.length) {
         setQuestionIndex(questionIndex + 1);
      } else {
         setShowFinalResult(true);
      }
   }

   function restartGame() {
      setScore(0);
      setQuestionIndex(0);
      setShowFinalResult(false);
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
               <h3 className={styles.category}>Single Choice Questions</h3>
               <h4 className={styles.currentScore}>Current score: {score}</h4>
               <h4 className={styles.questionTitle}>{questions[questionIndex]}</h4>
               <div className={styles.answers}>
                  <ul>
                     {answers[questionIndex]?.map((answer) => (
                        <li key={answer.id} className={styles.answer} onClick={() => optionClicked(answer.isCorrect)}>
                           {answer.text}
                        </li>
                     ))}
                  </ul>
               </div>
               {/* <button className={styles.nextQuestionButton} onClick={handeClickNextQuestion}>
                  Next Question
               </button> */}
            </div>
         )}
      </div>
   );
}
export default SingleChoiceQuestion;

// async function getServerSideProps(context) {
//    const response = await fetch(`http://localhost:3001/questions`);
//    const json = await response.json();
//    //  const questions = json[0];
//    console.log(json);

//    const props = {
//       questions: json[0],
//    };

//    return { props };
// }

// export { getServerSideProps };
