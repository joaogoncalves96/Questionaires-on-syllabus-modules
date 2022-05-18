import navStyles from "./Nav.module.css";
import Link from "next/link";
// import SingleChoiceQuestion from "../SingleChoiceQuestion/SingleChoiceQuestion";

function Nav() {
   return (
      <nav className={navStyles.nav}>
         <ul>
            <li>
               <Link href="/javascript">JavaScript</Link>
            </li>
            <li>
               <Link href="/html">HTML</Link>
            </li>
            <li>
               <Link href="/css">CSS</Link>
            </li>
            <li>
               <Link href="/react">React</Link>
            </li>
            <li>
               <Link href="/">Home</Link>
            </li>
            <li>
               <Link href="/addQuestion">Add a Question</Link>
            </li>
         </ul>
      </nav>
   );
}

export default Nav;
