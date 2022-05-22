import styles from "./Layout.module.css";
import Header from "../Header/Header";

const Layout = (props) => {
   const { children } = props;
   return (
      <div className={styles.layout}>
         <Header />
         <main className={styles.main}>{children}</main>
      </div>
   );
};

export default Layout;
