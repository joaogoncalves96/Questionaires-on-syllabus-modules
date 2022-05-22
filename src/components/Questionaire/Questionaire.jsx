import { useEffect, useState } from "react";
import MultiChoiceQuestion from "../MultiChoiceQuestion/MultiChoiceQuestion";
import SingleChoiceQuestion from "../SingleChoiceQuestion/SingleChoiceQuestion";
import TrueOrFalseQuestion from "../TrueOrFalseQuestion/TrueOrFalseQuestion";
import styles from "./Questionaire.module.css";

function Questionaire(props) {
   const { id, titleButton } = props;
   const [questionsById, setQuestionsById] = useState([]);
   const [questionaireTitle, setQuestionaireTitle] = useState("");
   const [answers, setAnswers] = useState([]);
   const [questionIndex, setQuestionIndex] = useState(0);
   const [questionTitle, setQuestionTitle] = useState("");
   const [questionCategory, setQuestionCategory] = useState("");

   const [score, setScore] = useState(0);

   useEffect(() => {
      async function loadInformation() {
         const [questionaire, questions] = await Promise.all([
            fetch(`http://localhost:3001/questionaires/${id}`).then((res) => res.json()),
            fetch("http://localhost:3001/questions").then((res) => res.json()),
         ]);

         setQuestionsById(questions.filter((question) => questionaire.questions.includes(question.id)));
         setQuestionaireTitle(questionaire.name);
         // setQuestionCategory(questions.map((category) => category.categories).join(", "));

         // setQuestionaireTitle(questionaireTitle);
         // console.log(questionsById);
         console.log(questions.categories);
      }
      loadInformation();
   }, []);

   function getPoints(pointsToAdd) {
      setScore(score + pointsToAdd);
   }

   return (
      <div className={styles.questionaire}>
         <h1 className={styles.questionaireTitle}>{questionaireTitle}</h1>
         {/* <h3>{}</h3> */}
         {questionsById.map((question) => {
            switch (question.type) {
               case "single-choice":
                  return (
                     <>
                        <SingleChoiceQuestion
                           key={question.id}
                           title={question.title}
                           possibleAnswers={question.answers.map((answer) => answer.text)}
                           answer={question.answers.filter((answer) => answer.isCorrect)}
                           score={getPoints}
                        />
                        <div className={styles.score}>Current Score: {score}</div>
                     </>
                  );
               case "multiple-choice":
                  return (
                     <>
                        <MultiChoiceQuestion
                           key={question.id}
                           title={question.title}
                           possibleAnswers={question.answers}
                           correctAnswers={question.correctAnswers}
                           score={getPoints}
                        />
                        <div className={styles.score}>Current Score: {score}</div>
                     </>
                  );
               case "true-or-false":
                  return (
                     <>
                        <TrueOrFalseQuestion
                           key={question.id}
                           title={question.title}
                           possibleAnswers={question.answers.map((answer) => answer.text)}
                           answer={question.answers.filter((answer) => answer.isCorrect)}
                           score={getPoints}
                        />
                        <div className={styles.score}>Current Score: {score}</div>
                     </>
                  );
               default:
                  return null;
            }
         })}
         <div className={styles.finalResults}>
            <h2>Final Results</h2>
            <h3>
               {score} of {questionsById.length} are correct ➡️ ({Math.round((score / questionsById.length) * 100)}
               %)
            </h3>
         </div>
      </div>
   );
}
export default Questionaire;
