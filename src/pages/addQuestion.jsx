import Head from "next/head";
import AddQuestionsForm from "../components/AddQuestionsForm/AddQuestionsForm";

function addQuestion() {
   return (
      <div>
         <Head>
            <title>HTML</title>
         </Head>
         {/* <h1>HTML</h1> */}
         <AddQuestionsForm />
      </div>
   );
}
export default addQuestion;
