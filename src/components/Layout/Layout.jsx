import Nav from "../Nav";
import styles from "./Layout.module.css";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
        <Header />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
