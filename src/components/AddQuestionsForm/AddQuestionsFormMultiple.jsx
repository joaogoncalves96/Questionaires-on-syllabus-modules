import { FormEvent, useRef, useState } from "react";

// import styles from "./AddQuestionsFormMultiple.module.css";

function AddQuestionsFormMultiple() {
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
            questionTitle: questionareaRef.current.value,
            answers: [
                answerareaRef.current.value,
               answerareaRef1.current.value,
               answerareaRef2.current.value,
               answerareaRef3.current.value,
            ],
            correctAnswers: [ 
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
               <option selected value="multiple-choice">
                  multiple-choice
               </option>
            </select>
         </label>
         <label>
            question
            <textarea ref={questionareaRef} name="questionTitle" />
         </label>
         <label>
            correct?
            <textarea ref={answerareaRef} name="answers" />
         </label>
         <label>
            correct?
            <textarea ref={answerareaRef1} name="answers" />
         </label>
         <label>
            correct?
            <textarea ref={answerareaRef2} name="answers" />
         </label>
         <label>
            correct?
            <textarea ref={answerareaRef3} name="answers" />
         </label>
         <button type="submit">Add question</button>
      </form>
   );
}

export default AddQuestionsFormMultiple;
