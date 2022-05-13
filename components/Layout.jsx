import Nav from './Nav';
import styles from '../styles/Layout.module.css';
import Header from './Header';
import Login from './Login';

const Layout = ({ children }) => {
    return (
        <>
        <Nav />
        <div className={styles.container}>
        <main className={styles.main}>{children}
        </main>
        <Header />
        </div>
        </>
    );
}

export default Layout;


