import Head from "next/head";
import AddQuestionsFormSingle from "../components/AddQuestionsForm/AddQuestionsFormSingle";

function addQuestionSingle() {
   return (
      <div>
         <Head>
            <title>HTML</title>
         </Head>
         {/* <h1>HTML</h1> */}
         <AddQuestionsFormSingle />
      </div>
   );
}
export default addQuestionSingle;
