import styles from "./Footer.module.css";

function Footer() {
   return (
      <div className={styles.footer}>
         <div className={styles.followUs}>CHECK FOR MORE ON</div>
         <div className={styles.images}>
            <a target="_blank" href="https://mindswap-lms.vercel.app/syllabus/html">
               <img src="https://cdn-icons-png.flaticon.com/512/174/174854.png" alt="html" />
            </a>
            <a target="_blank" href="https://mindswap-lms.vercel.app/syllabus/css">
               <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="css" />
            </a>
            <a target="_blank" href="https://mindswap-lms.vercel.app/syllabus/javascript">
               {" "}
               <img src="https://cdn-icons-png.flaticon.com/512/919/919828.png" alt="javascript" />
            </a>
            <a target="_blank" href="https://mindswap-lms.vercel.app/syllabus/react">
               <img src="https://cdn-icons-png.flaticon.com/512/1048/1048877.png" alt="react" />
            </a>

            <a target="_blank" href="https://github.com/joaogoncalves96/Questionaires-on-syllabus-modules">
               <img src="https://cdn-icons-png.flaticon.com/512/919/919847.png" alt="github" />
            </a>
         </div>
      </div>
   );
}

export default Footer;
