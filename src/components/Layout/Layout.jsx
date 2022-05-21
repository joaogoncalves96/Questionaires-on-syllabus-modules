import Nav from "../Nav/Nav";
import styles from "./Layout.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = (props) => {
   const { children } = props;
   return (
      <div className={styles.layout}>
         <Header className={styles.header} />
         <main className={styles.main}>{children}</main>
         <Footer />
      </div>
   );
};

export default Layout;
