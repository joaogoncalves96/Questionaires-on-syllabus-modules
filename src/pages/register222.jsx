// VER MELHOR SOLUÇÃO ...

import { useRouter } from "next/router";
//import { useForm } from "react-hook-form";
import { tokenToString } from "typescript";
import * as yup from 'yup'; 
import styles from "../components/Register/Register.module.css";
import Router from "next/router"; // for later!
import users from "../api/users";


function Register() {
    const router = useRouter;

    const validation = yup.object.shape({
        username: yup.string().required("Please choose a valid username"),
        password: yup.string().required("Please choose a valid password")
    });

    const options = { resolver: yupResolver(validation) };
    const { register, handleSubmit, formState } = useForm(options);
    router.push('login');


    function onSubmit(user) {
        const message = "Register sucessfully submmited";
        return userService.register(user).then(() => {
            message, { keepAfterRouteChange: true};//, router.push('login')
        })
    }

    return (
        <div>
            <form className="form-group">
                form onSubmit={handleSubmit(onSubmit)} 
                <label>Choose your username</label>
                <input name="username" type="text" {...register('username')} />
            </form>
            <lable className="form-group">
                form onSubmit={handleSubmit(onSubmit)} 
                <label>Choose your password</label>
                <input name="password" type="password" {...register('password')} />
            </lable>
            <button type="submit" className={styles.submit}>Register</button>
        </div>
    )

    /*return (
        <form className={styles.register} onSubmit={handleSubmit}>
            <label className={styles.label}>
             Choose your username:
             <input type="text" name="username" />
          </label>
          <label className={styles.label}>
                Choose your password:
                <input type="text" name="password" />
         </label>
          <button type="submit" value="submit">Register</button>
     </form>
 );*/
}

export default Register;