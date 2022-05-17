import Head from 'next/head';
import LoginForm from '../components/Login/LoginForm';

function Login() {
    return (
        <div>
            <Head>
            <title>login</title>
            </Head>
           <LoginForm />
        </div>
    );
}
export default Login;