import Link from "next/link";
import styles from "./Nav.module.css";
// import SingleChoiceQuestion from "../SingleChoiceQuestion/SingleChoiceQuestion";

function Nav() {
   return (
      <nav className={styles.nav}>
         <div className={styles.categories}>
            <Link href="/javascript">JavaScript</Link>
            <Link href="/html">HTML</Link>
            <Link href="/css">CSS</Link>
            <Link href="/react">React</Link>
         </div>
         <div className={styles.homeAndAddQuestion}>
            <Link href="/">Home</Link>
            <Link href="/addQuestion">Add a Question</Link>
         </div>
      </nav>
   );
}

export default Nav;
