// VER MELHOR SOLUÇÃO : jwt???

import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { tokenToString } from "typescript";
import * as yup from 'yup'; 


function Register() {
    const router = useRouter;

    const validation = yup.object.shape({
        username: yup.string().required("Please choose a valid username"),
        password: yup.string().required("Please choose a valid password"),
        token: yup.string().notRequired()
    });

    const options = { resolver: yupResolver(validation) };
    const { register, handleSubmit, formState } = useForm(options);
    router.push('login');


    function onSubmit(user) {
        const message = "Register sucessfully submmited";
        return userService.register(user).then(() => {
            message.s, { keepAfterRouteChange: true};//, router.push('login')
        })
    }

    return (
        <div>
            <div className="form-group">
                form onSubmit={handleSubmit(onSubmit)} 
                <label>Choose your username</label>
                <input name="username" type="text" {...register('username')} />
            </div>
            <div className="form-group">
                form onSubmit={handleSubmit(onSubmit)} 
                <label>Choose your password</label>
                <input name="password" type="password" {...register('password')} />
            </div>
            <button type="submit" className={styles.submit}>Register</button>
        </div>
    )
}

export default Register;