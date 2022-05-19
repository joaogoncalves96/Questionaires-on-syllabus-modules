import Head from "next/head";
import Questionaire from "../components/Questionaire/Questionaire";

function JavaScript() {
   return (
      <div>
         <Questionaire id={2} />
         <Questionaire id={1} />
         <Questionaire id={3} />
      </div>
   );
}
export default JavaScript;
