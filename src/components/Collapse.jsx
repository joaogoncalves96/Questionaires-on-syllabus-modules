import React from "react";
import { useState, useRef } from "react";
// import { useRef } from "react";

function Collapsible(props) {
   const [isOpen, setIsOpen] = useState(false);

   const parentRef = useRef();

   return (
      <div className="collapsible">
         <button className="toggle" onClick={() => setIsOpen(!isOpen)}>
            {props.label}
         </button>
         {isOpen && ( // if isOpen is true, then render the children
            <div ref={parentRef} className="content">
               {" "}
               {props.children}{" "}
            </div>
         )}
      </div>
   );
}
export default Collapsible;
