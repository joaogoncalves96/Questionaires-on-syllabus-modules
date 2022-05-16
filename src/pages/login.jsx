import Head from 'next/head';
import Link from 'next/link';
import Login from '../components/Login/Login';

function login() {
    return (
        <div>
            <Head>
            <title>login</title>
            </Head>
            <Login />
        </div>
    );
}
export default login;