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
   //    const correctAnswerareaRef = useRef(null);
   //    const correctAnswerareaRef1 = useRef(null);
   const answerareaRef = useRef(null);
   async function handleSubmit(e) {
      e.preventDefault();
      alert("Question added");
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
      //   if (response.ok) {
      //       onSubmit(question);
      //   }
   }
   return (
      <form className={styles.container} ref={formRef} onSubmit={handleSubmit}>
         <label className={styles.categories}>
            Categories
            {
               <select ref={categoriesareaRef} name="category">
                  <option selected value="JavaScript">
                     JavaScript
                  </option>
                  <option value="React">React</option>
                  <option value="HTML">HTML</option>
                  <option value="CSS">CSS</option>
               </select>
            }
            {/* <textarea ref={categoriesareaRef} name="categoriesTitle" /> */}
            <textarea ref={secundaryareaRef} name="secundaryTitle" />
         </label>
         <label className={styles.type}>
            Type
            <select ref={typeareaRef} name="type">
               <option selected value="multiple-choice">
                  multiple-choice
               </option>
            </select>
         </label>
         <label className={styles.question}>
            question
            <textarea ref={questionareaRef} name="title" />
         </label>
         {Array.from({ length: answersCount }).map((_, i) => (
            <div className="answer">
               <div className={styles.answer}>
                  <label key={i}>
                     Answer
                     <textarea ref={answerareaRef} name="answers" />
                  </label>
                  <label>
                     Correct?
                     <input type="checkbox" name="correctAnswers" />
                  </label>
               </div>
            </div>
         ))}
         <button type="submit" className={styles.addQuestionButton}>
            Add question
         </button>
      </form>
   );
}
export default AddQuestionsFormMultiple;

// import { FormEvent, useRef, useState } from "react";
// function AddQuestionsFormMultiple() {
//    //  const { onSubmit } = props;
//    const categoriesareaRef = useRef(null);
//    const secundaryareaRef = useRef(null);
//    const typeareaRef = useRef(null);
//    const questionareaRef = useRef(null);
//    const formRef = useRef(null);
//    const [answersCount, setAnswersCount] = useState(4);
//    //    const correctAnswerareaRef = useRef(null);
//    //    const correctAnswerareaRef1 = useRef(null);
//    const answerareaRef = useRef(null);
//    async function handleSubmit(e) {
//       e.preventDefault();
//       const answers = formRef.current.querySelectorAll(".answer");
//       const names = Array.from(answers).map((answer) => answer.querySelector("textarea").value);
//       const correctAnswers = Array.from(answers)
//          .filter((answer) => answer.querySelector("input").checked)
//          .map((answer) => answer.querySelector("textarea").value);
//       const response = await fetch(`http://localhost:3000/api/questions`, {
//          method: "POST",
//          headers: {
//             "Content-Type": "application/json",
//          },
//          body: JSON.stringify({
//             categories: [categoriesareaRef.current.value, secundaryareaRef.current.value],
//             type: typeareaRef.current.value,
//             title: questionareaRef.current.value,
//             answers: names,
//             correctAnswers: correctAnswers,
//          }),
//       });
//       const question = await response.json();
//       //   if (response.ok) {
//       //       onSubmit(question);
//       //   }
//    }
//    return (
//       <form ref={formRef} onSubmit={handleSubmit}>
//          <label>
//             Categories
//             {
//                <select ref={categoriesareaRef} name="category">
//                   <option selected value="JavaScript">
//                      JavaScript
//                   </option>
//                   <option value="React">React</option>
//                   <option value="HTML">HTML</option>
//                   <option value="CSS">CSS</option>
//                </select>
//             }
//             {/* <textarea ref={categoriesareaRef} name="categoriesTitle" /> */}
//             <textarea ref={secundaryareaRef} name="secundaryTitle" />
//          </label>
//          <label>
//             Type
//             <select ref={typeareaRef} name="type">
//                <option selected value="multiple-choice">
//                   multiple-choice
//                </option>
//             </select>
//          </label>
//          <label>
//             question
//             <textarea ref={questionareaRef} name="title" />
//          </label>
//          {Array.from({ length: answersCount }).map((_, i) => (
//             <div className="answer">
//                <label key={i}>
//                   Answer
//                   <textarea ref={answerareaRef} name="answers" />
//                </label>
//                <label>
//                   Correct?
//                   <input type="checkbox" name="correctAnswers" />
//                </label>
//             </div>
//          ))}
//          <button type="submit">Add question</button>
//       </form>
//    );
// }
// export default AddQuestionsFormMultiple;
