import Head from "next/head";
import AddAllQuestionsForm from "../components/AddQuestionsForm/AddAllQuestionsForm";


function addQuestion() {
   return (
      <div>
         <Head>
            <title>HTML</title>
         </Head>
         <AddAllQuestionsForm />
      </div>
   );
}
export default addQuestion;
