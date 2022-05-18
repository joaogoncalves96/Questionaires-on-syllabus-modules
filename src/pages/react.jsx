import Head from "next/head";
import SingleChoiceQuestion from "../components/SingleChoiceQuestion/SingleChoiceQuestion";

function React() {
   return (
      <div>
         <Head>
            <title>React</title>
         </Head>
         {/* <h1>React</h1> */}
         <SingleChoiceQuestion />
      </div>
   );
}
export default React;
