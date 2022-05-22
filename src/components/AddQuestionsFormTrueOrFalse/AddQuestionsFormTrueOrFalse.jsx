import { FormEvent, useRef } from "react";
import styles from "./AddQuestionsFormTrueOrFalse.module.css";

function AddQuestionsFormTrueOrFalse() {
   const categoriesareaRef = useRef(null);
   const secundaryareaRef = useRef(null);
   const typeareaRef = useRef(null);
   const questionareaRef = useRef(null);
   const answerareaRef = useRef(null);
   const answerareaRef1 = useRef(null);
   const trueorFalseareaRef = useRef(null);
   const trueorFalseareaRef1 = useRef(null);
   async function handleSubmit(e) {
      e.preventDefault();
      alert("Question added ➕");
      const response = await fetch(`http://localhost:3000/api/questions`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            categories: [categoriesareaRef.current.value, secundaryareaRef.current.value],
            type: typeareaRef.current.value,
            title: questionareaRef.current.value,
            answers: [
               {
                  id: 1,
                  text: answerareaRef.current.value,
                  isCorrect: trueorFalseareaRef.current.value === "true" ? true : false,
               },
               {
                  id: 2,
                  text: answerareaRef1.current.value,
                  isCorrect: trueorFalseareaRef1.current.value === "true" ? true : false,
               },
            ],
         }),
      });
      const question = await response.json();
      //   if (response.ok) {
      //       onSubmit(question);
      //   }
   }
   return (
      <form onSubmit={handleSubmit} className={styles.container}>
         <h1 className={styles.questionTitle}>True or False Question</h1>
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
            {/* <textarea ref={categoriesareaRef} name="categoriesTitle" /> */}
            <textarea ref={secundaryareaRef} name="secundaryTitle" placeholder="sub-category" required />
         </label>
         <label className={styles.type}>
            Type
            <select ref={typeareaRef} name="type">
               <option defaultValue value="true-or-false">
                  True-or-False
               </option>
            </select>
         </label>
         <label className={styles.question}>
            Question:
            <textarea ref={questionareaRef} name="title" />
         </label>
         <div className={styles.answers}>
            <textarea ref={answerareaRef} name="answers" placeholder="Answer" required />
            <select ref={trueorFalseareaRef} name="isCorrect">
               <option value="true">True</option>
               <option defaultValue value="false">
                  False
               </option>
            </select>

            <textarea ref={answerareaRef1} name="answers" placeholder="Answer" required />
            <select ref={trueorFalseareaRef1} name="isCorrect">
               <option value="true">True</option>
               <option defaultValue value="false">
                  False
               </option>
            </select>
         </div>

         <button type="submit" className={styles.addQuestionButton}>
            Add question
         </button>
      </form>
   );
}
export default AddQuestionsFormTrueOrFalse;
