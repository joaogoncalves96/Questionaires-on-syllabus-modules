import styles from './Login.module.css';

function Login() {
  return (
    <form className={styles.login}>
        <label>
            Username:
            <input type="text" name="username" />
        </label>
        <label>
            Password:
            <input type="password" name="password" />
        </label>
        <input type="submit" value="Submit" />
    </form>
  );
}
export default Login;