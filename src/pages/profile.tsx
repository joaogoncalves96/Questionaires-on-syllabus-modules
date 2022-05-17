import Head from 'next/head';
import Router from "next/router";
import { useContext } from 'react';
import { SessionContext } from '../components/Auth/SessionContext';
import LoginForm from '../components/Login/LoginForm';
import session from './api/session';

function Profile() {
    const session = useContext(SessionContext);
    const handleLogout = () => {
        Router.push("/login")
    }
    return (
        <div>
            <Head>
            <title>Profile</title>
            </Head>
            <h1>Welcome
            <button onClick={handleLogout}>Logout</button></h1>
        </div>
    );
}
export default Profile;