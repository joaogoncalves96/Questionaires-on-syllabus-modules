import { useState } from "react";
import Questionaire from "../components/Questionaire/Questionaire";
import { SplitPane } from "react-collapse-pane";
import Collapsible from "../components/Collapse";
import Header from "../components/Header/Header";

function Homepage() {
   // const [isToggleOn, setToggleOn] = useState(false);

   // //    const { children } = props;

   // function handleClick() {
   //    if (!isToggleOn) {
   //       setToggleOn(true);
   //    } else {
   //       setToggleOn(false);
   //    }
   // }

   return (
      <>
         {/* <button onClick={handleClick}>{isToggleOn ? "Hide Spolier" : "Show Spoiler"}</button>
         {isToggleOn ? <Questionaire id={2} collapsible={true} /> : "Message"} */}
         {/* <Collapsible label="Questionaireeeee"> */}
         <Questionaire id={2} />
         {/* </Collapsible> */}
         {/* 
         <SplitPane split="horizontal" collapse={true}>
            <Questionaire id={2} />
            <div>This is the first div</div>
            <div>This is the second div</div>
            <div>This is the third div</div>
            This is the fourth but not a div!
         </SplitPane> */}
      </>
   );
}
export default Homepage;
