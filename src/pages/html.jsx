import Head from "next/head";
import SingleChoiceQuestion from "../components/SingleChoiceQuestion/SingleChoiceQuestion";

function Html() {
   return (
      <div>
         <Head>
            <title>HTML</title>
         </Head>
         {/* <h1>HTML</h1> */}
         <SingleChoiceQuestion />
      </div>
   );
}
export default Html;
