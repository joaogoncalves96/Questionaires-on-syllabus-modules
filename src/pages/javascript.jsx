import Head from "next/head";
import SingleChoiceQuestion from "../components/SingleChoiceQuestion/SingleChoiceQuestion";
import MultiChoiceQuestion from "../components/MultiChoiceQuestion/MultiChoiceQuestion";

function JavaScript() {
   // const { category } = props;

   return (
      <div>
         <Head>
            <title>Javascript</title>
         </Head>
         {/* <h1>JavaScript</h1> */}
         {/* <SingleChoiceQuestion /> */}
         <MultiChoiceQuestion />
      </div>
   );
}
export default JavaScript;
