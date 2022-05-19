import { FormEvent, useRef } from "react";

import styles from "./AddQuestionsForm.module.css";

function AddQuestionsForm() {
   //  const { onSubmit } = props;
   const categoryareaRef = useRef(null);
   const questionareaRef = useRef(null);
   const answerareaRef = useRef(null);
   const answerareaRef1 = useRef(null);
   const answerareaRef2 = useRef(null);
   const answerareaRef3 = useRef(null);


   async function handleSubmit(e) {
      e.preventDefault();

      const response = await fetch(`http://localhost:3000/api/questions`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            category: categoryareaRef.current.value,
            questionTitle: questionareaRef.current.value,
            answers: [
                { 
                    text: answerareaRef.current.value,
                    isCorrect: true,
                },
                {
                    text: answerareaRef1.current.value,
                    isCorrect: false,
                },
                {
                    text: answerareaRef2.current.value,
                    isCorrect: false,
                } ,
                {
                    text: answerareaRef3.current.value,
                    isCorrect: false,
                }
            ]
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
            Category
            <select ref={categoryareaRef} name="category">
               <option selected value="JavaScript">
                  JavaScript
               </option>
               <option value="React">React</option>
               <option value="HTML">HTML</option>
               <option value="CSS">CSS</option>
            </select>
         </label>
         <label>
            question
            <textarea ref={questionareaRef} name="questionTitle" />
         </label>
         <label>
            answerVerdadeira
            <textarea ref={answerareaRef}   name="answers" />
         </label>
         <label>
            answers
            <textarea ref={answerareaRef1}   name="answers" />
         </label>
         <label>
            answers
            <textarea ref={answerareaRef2}   name="answers" />
         </label>
         <label>
            answers
            <textarea ref={answerareaRef3}   name="answers" />
         </label>
         <button type="submit">Add question</button>
      </form>
   );
}

export default AddQuestionsForm;
