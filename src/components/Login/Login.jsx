import styles from './Login.module.css';
import { useState } from 'react';
import Link from 'next/link';

function Login({login}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function validateLogin() {
    return username.length > 0 && password.length > 0;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit" ,{ username, password});
  }

  return (
    <form className={styles.login} onSubmit={handleSubmit}>
        <label>
            Username:
            <input placeholder='Enter your username' type="text" name="username" value={username}
            onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
            Password:
            <input placeholder='Enter your password' type="password" name="password" value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type='submit' disabled={!validateLogin()}>Login</button>        
    </form>
    
  );
}
export default Login;