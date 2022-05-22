import React from "react";
import useCollapse from "react-collapsed";
import styles from "./Collapse.module.css";

function Collapse(props) {
   const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
   const { title, closeButtonTitle } = props;
   return (
      <div className={styles.collapsible}>
         <div className={styles.header} {...getToggleProps()}>
            {isExpanded ? (
               <button className={styles.button}>{closeButtonTitle}</button>
            ) : (
               <button className={styles.button}>{title}</button>
            )}
         </div>
         <div {...getCollapseProps()}>
            <div className={styles.content}>{props.children}</div>
         </div>
      </div>
   );
}
export default Collapse;
