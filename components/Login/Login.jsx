import loginStyles from './Login.module.css';

function Login() {
  return (
    <form className={loginStyles.login}>
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