import React from "react";
import useCollapse from "react-collapsed";
import styles from "./CollapseCategory.module.css";

function CollapseCategory(props) {
   const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
   const { photo_icon } = props;
   return (
      <div className={styles.collapsible}>
         <div className={styles.header} {...getToggleProps()}>
            {isExpanded ? (
               <button
                  className={styles.button}
                  style={{
                     backgroundImage: `url(${photo_icon})`,
                  }}
               ></button>
            ) : (
               <button
                  className={styles.button}
                  style={{
                     backgroundImage: `url(${photo_icon})`,
                  }}
               ></button>
            )}
         </div>
         <div {...getCollapseProps()}>
            <div className={styles.content}>{props.children}</div>
         </div>
      </div>
   );
}
export default CollapseCategory;
