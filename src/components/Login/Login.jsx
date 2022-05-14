import styles from "./Login.module.css";
import { useState } from "react";
import databaseUsers from "../../../databaseUsers.json";


function Login() {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const[sucessLogin, setSucessLogin] = useState(false);

  const handleUsernameChange = (e) => {
    setSucessLogin('');
    setUsernameError(' ');
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setSucessLogin('');
    setPasswordError(' ');
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   console.log(username, password);
  };
    





  return (
    <form onSubmit={handleSubmit} className={styles.login} autoComplete="off">
      <label>Username</label>
      <input
      required
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={handleUsernameChange}/><br></br>
     {usernameError&&<div className={styles.error}>{usernameError}</div>}
      <label>Password</label>
      <input
      required
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={handlePasswordChange}/><br></br>
       {passwordError&&<div className={styles.error}>{passwordError}</div>}
      <button type="submit" className={styles.submit}>Login</button>
    </form>
  );
}
export default Login;
