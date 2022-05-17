import { useContext } from 'react';
import { SessionContext } from '../Auth/SessionContext';
import styles from './Header.module.css'

function Header () {
    const session = useContext(SessionContext);
    return (
        <div>
        <h1 className={styles.title}>HackerSwap  </h1>
        </div>
    )
}

export default Header;