import Nav from '../Nav/Nav';
import styles from './Layout.module.css';
import Header from '../Header/Header';

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


