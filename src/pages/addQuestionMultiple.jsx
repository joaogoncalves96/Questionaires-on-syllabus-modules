import Head from "next/head";
import AddQuestionsFormMultiple from "../components/AddQuestionsForm/AddQuestionsFormMultiple";

function addQuestionMultiple() {
   return (
      <div>
         <Head>
            <title>HTML</title>
         </Head>
         {/* <h1>HTML</h1> */}
         <AddQuestionsFormMultiple />
      </div>
   );
}
export default addQuestionMultiple;
