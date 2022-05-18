import { FormEvent, useRef } from "react";

import styles from "./AddQuestionsForm.module.css";


function AddQuestionsForm() {
   //  const { onSubmit } = props;

    const questionareaRef = useRef(null);
    const answerareaRef = useRef(null);


    async function handleSubmit(e) {
        e.preventDefault();

        const response = await fetch(`http://localhost:3000/api/questions`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
      
               questionTitle: questionareaRef.current.value, 
               answers: answerareaRef.current.value,
                // posterId: number
            }),
        });

        const question = (await response.json());

      //   if (response.ok) {
      //       onSubmit(question);
      //   }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label >
                question
                <textarea ref={questionareaRef} name="questionTitle" />
            </label>
            <label >
                answers
                <textarea ref={answerareaRef} name="answers" />
            </label>
        
            <button type="submit">Add question</button>


        </form>
    );
}

export default AddQuestionsForm;