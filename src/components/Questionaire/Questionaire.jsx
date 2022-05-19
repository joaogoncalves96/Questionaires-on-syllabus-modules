import { useEffect, useState } from "react";
import MultiChoiceQuestion from "../MultiChoiceQuestion/MultiChoiceQuestion";
import SingleChoiceQuestion from "../SingleChoiceQuestion/SingleChoiceQuestion";
import TrueOrFalseQuestion from "../TrueOrFalseQuestion/TrueOrFalseQuestion";
import styles from "./Questionaire.module.css";

function Questionaire(props) {
   const { id, type } = props;
   const [questionsById, setQuestionsById] = useState([]);
   const [answers, setAnswers] = useState([]);
   //    const [questionIndex, setQuestionIndex] = useState(0);

   const [score, setScore] = useState(0);
   //    const [showFinalResult, setShowFinalResult] = useState(false);
   //    const [questionTitle, setQuestionTitle] = useState("");

   useEffect(() => {
      async function loadInformation() {
         const [questionaire, questions] = await Promise.all([
            fetch(`http://localhost:3001/questionaires/${id}`).then((res) => res.json()),
            fetch("http://localhost:3001/questions").then((res) => res.json()),
         ]);

         setQuestionsById(questions.filter((question) => questionaire.questions.includes(question.id)));

         console.log(questionsById);
         //   console.log(question.type)
      }
      loadInformation();
   }, []);

   //    if (questionIndex + 1 < questions.length) {
   //      setQuestionIndex(questionIndex + 1);
   //    } else {
   //      setShowFinalResult(true);
   //    }

   function getPoints(pointsToAdd) {
      setScore(score + pointsToAdd);
   }

   return (
      <>
         <div className={styles.questionaire}>Your current score is: {score}</div>

         {questionsById.map((question) => {
            switch (question.type) {
               case "single-choice":
                  return (
                     <SingleChoiceQuestion
                        key={question.id}
                        title={question.title}
                        possibleAnswers={question.answers.map((answer) => answer.text)}
                        answer={question.answers.filter((answer) => answer.isCorrect)}
                        score={getPoints}
                     />
                  );
               case "multiple-choice":
                  return (
                     <MultiChoiceQuestion
                        key={question.id}
                        title={question.title}
                        possibleAnswers={question.answers}
                        correctAnswers={question.correctAnswers}
                        score={getPoints}
                     />
                  );
               case "true-or-false":
                  return (
                     <TrueOrFalseQuestion
                        key={question.id}
                        title={question.title}
                        possibleAnswers={question.answers.map((answer) => answer.text)}
                        answer={question.answers.filter((answer) => answer.isCorrect)}
                        score={getPoints}
                     />
                  );
               default:
                  return null;
            }
         })}
      </>
   );
}
export default Questionaire;
