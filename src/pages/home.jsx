import { useState } from "react";
import Questionaire from "../components/Questionaire/Questionaire";

function Homepage() {
   //    const [isToggleOn, setToggleOn] = useState(false);

   //    //    const { children } = props;

   //    function handleClick() {
   //       if (!isToggleOn) {
   //          setToggleOn(true);
   //       } else {
   //          setToggleOn(false);
   //       }
   //    }

   return (
      <>
         <Questionaire id={2} collapsible={true} />
      </>
   );
}
export default Homepage;
