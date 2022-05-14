import Head from 'next/head';
import Login from '../components/Login/Login';


function login() {
    return (
        <div>
            <Head>
            <title>Login</title>
            </Head>
            <Login />
        </div>
    );
}
export default login;