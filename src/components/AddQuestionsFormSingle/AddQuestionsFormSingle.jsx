import { FormEvent, useRef } from "react";

import styles from "./AddQuestionsFormSingle.module.css";

function AddQuestionsFormSingle() {
   //  const { onSubmit } = props;
   const categoriesareaRef = useRef(null);
   const secundaryareaRef = useRef(null);
   const typeareaRef = useRef(null);
   const questionareaRef = useRef(null);
   const answerareaRef = useRef(null);
   const answerareaRef1 = useRef(null);
   const answerareaRef2 = useRef(null);
   const answerareaRef3 = useRef(null);

   const trueorFalseareaRef = useRef(null);
   const trueorFalseareaRef1 = useRef(null);
   const trueorFalseareaRef2 = useRef(null);
   const trueorFalseareaRef3 = useRef(null);

   async function handleSubmit(e) {
      e.preventDefault();

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
               {
                  id: 3,
                  text: answerareaRef2.current.value,
                  isCorrect: trueorFalseareaRef2.current.value === "true" ? true : false,
               },
               {
                  id: 4,
                  text: answerareaRef3.current.value,
                  isCorrect: trueorFalseareaRef3.current.value === "true" ? true : false,
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
      <form onSubmit={handleSubmit}>
         <label>
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
         <label>
            Type
            <select ref={typeareaRef} name="type">
               <option selected value="single-choice">
                  single-choice
               </option>
            </select>
         </label>
         <label>
            question
            <textarea ref={questionareaRef} name="title" />
         </label>
         <label>
            answer
            <textarea ref={answerareaRef} name="answers" />
            <select ref={trueorFalseareaRef} name="isCorrect">
               <option value="true">true</option>
               <option selected value="false">
                  false
               </option>
            </select>
         </label>
         <label>
            answers
            <textarea ref={answerareaRef1} name="answers" />
            <select ref={trueorFalseareaRef1} name="isCorrect">
               <option value="true">true</option>
               <option selected value="false">
                  false
               </option>
            </select>
         </label>
         <label>
            answers
            <textarea ref={answerareaRef2} name="answers" />
            <select ref={trueorFalseareaRef2} name="isCorrect">
               <option value="true">true</option>
               <option selected value="false">
                  false
               </option>
            </select>
         </label>
         <label>
            answers
            <textarea ref={answerareaRef3} name="answers" />
            <select ref={trueorFalseareaRef3} name="isCorrect">
               <option value="true">true</option>
               <option selected value="false">
                  false
               </option>
            </select>
         </label>
         <button type="submit">Add question</button>
      </form>
   );
}

export default AddQuestionsFormSingle;
