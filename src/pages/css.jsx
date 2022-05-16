import Head from "next/head";
import SingleChoiceQuestion from "../components/SingleChoiceQuestion/SingleChoiceQuestion";

function Css() {
   return (
      <div>
         <Head>
            <title>CSS</title>
         </Head>
         {/* <h1>CSS</h1> */}
         <SingleChoiceQuestion />
      </div>
   );
}
export default Css;
