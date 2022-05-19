import Head from "next/head";
import Questionaire from "../components/Questionaire/Questionaire";

function JavaScript() {
   return (
      <div>
         <Head>
            <title>Javascript</title>
         </Head>
         <Questionaire id={2} />
         {/* <Questionaire id={1} /> */}
      </div>
   );
}
export default JavaScript;
