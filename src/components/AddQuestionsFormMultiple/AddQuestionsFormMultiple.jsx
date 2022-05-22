import { FormEvent, useRef, useState } from "react";
import styles from "./AddQuestionsFormMultiple.module.css";
function AddQuestionsFormMultiple() {
   //  const { onSubmit } = props;
   const categoriesareaRef = useRef(null);
   const secundaryareaRef = useRef(null);
   const typeareaRef = useRef(null);
   const questionareaRef = useRef(null);
   const formRef = useRef(null);
   const [answersCount, setAnswersCount] = useState(4);
   //const a = answersCount.map((_) => <label key={_.i}></label>);
   //    const correctAnswerareaRef = useRef(null);
   //    const correctAnswerareaRef1 = useRef(null);
   const answerareaRef = useRef(null);
   async function handleSubmit(e) {
      e.preventDefault();
      alert("Question added ➕");
      const answers = formRef.current.querySelectorAll(".answer");
      const names = Array.from(answers).map((answer) => answer.querySelector("textarea").value);
      const correctAnswers = Array.from(answers)
         .filter((answer) => answer.querySelector("input").checked)
         .map((answer) => answer.querySelector("textarea").value);
      const response = await fetch(`http://localhost:3000/api/questions`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            categories: [categoriesareaRef.current.value, secundaryareaRef.current.value],
            type: typeareaRef.current.value,
            title: questionareaRef.current.value,
            answers: names,
            correctAnswers: correctAnswers,
         }),
      });
      const question = await response.json();
   }
   return (
      <form className={styles.container} ref={formRef} onSubmit={handleSubmit}>
         <h1 className={styles.questionTitle}>Multi - Choice Question</h1>
         <label className={styles.categories}>
            Categories
            {
               <select ref={categoriesareaRef} name="category" required>
                  <option defaultValue value="JavaScript">
                     JavaScript
                  </option>
                  <option value="React">React</option>
                  <option value="HTML">HTML</option>
                  <option value="CSS">CSS</option>
               </select>
            }
            <textarea ref={secundaryareaRef} name="secundaryTitle" placeholder="sub-category" required />
         </label>
         <label className={styles.type}>
            Type
            <select ref={typeareaRef} name="type">
               <option defaultValue value="multiple-choice">
                  Multiple-choice
               </option>
            </select>
         </label>
         <label className={styles.question}>
            Question:
            <textarea ref={questionareaRef} name="title" required />
         </label>
         {Array.from({ length: answersCount }).map((_, i) => (
            <label key={i} className={styles.answer}>
               <div className="answer">
                  <div className={styles.answer}>
                     <textarea ref={answerareaRef} name="answers${i}" placeholder="Answer" required />
                     <label>
                        Correct?
                        <input type="checkbox" name="correctAnswers" />
                     </label>
                  </div>
               </div>
            </label>
         ))}
         <button type="submit" className={styles.addQuestionButton}>
            Add question
         </button>
      </form>
   );
}
export default AddQuestionsFormMultiple;
