import Link from "next/link";
import styles from "./AddAllQuestionsForm.module.css";

function AddAllQuestionsForm() {
   return (
      <div className={styles.container}>
         <h3>ADD QUESTION:</h3>
         <Link href="/addQuestionMultiple">
            <button type="submit" className={styles.buttonAddQuestion}>
               Multiple - choice Question
            </button>
         </Link>
         <Link href="/addQuestionSingle">
            <button type="submit" className={styles.buttonAddQuestion}>
               Single - choice Question
            </button>
         </Link>
         <Link href="/addQuestionTrueOrFalse">
            <button type="submit" className={styles.buttonAddQuestion}>
               True or false Question
            </button>
         </Link>
      </div>
   );
}

export default AddAllQuestionsForm;
