import navStyles from './Nav.module.css'
import Link from 'next/link';

function Nav() {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                <Link href='/javascript'>JavaScript</Link>
                </li>
                <li>
                <Link href='/html'>HTML</Link>
                </li>
                <li>
                <Link href='/css'>CSS</Link>
                </li>
                <li>
                <Link href='/react'>React</Link>
                </li>
                <li>
                <Link href='/profile'>Profile</Link>
                </li>
                <li>
                <Link href='/login'>Login</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;