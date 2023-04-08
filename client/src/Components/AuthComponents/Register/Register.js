import { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import * as authService from '../../../services/authService'
import { Link, useNavigate } from 'react-router-dom';
import styles from './Register.module.css';


export const Register = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        email: false,
        password: false,
        serverErrors: false
    });

    const onChangeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({...errors, [e.target.name]: false, ["serverErrors"]: false});
    };

    const onBlurHandler = (e) => {
        if (e.target.name === 'email') {
            const emailRegexValidator = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/;
            if (!e.target.value.match(emailRegexValidator)) {
                setErrors(errors => ({ ...errors, [e.target.name]: true }));
            } else {
                setErrors(errors => ({ ...errors, [e.target.name]: false }));

            }
        }
        if (e.target.name === 'password') {
            if (e.target.value.length < 6 || e.target.value.length > 12) {
                setErrors(errors => ({ ...errors, [e.target.name]: true }));
            } else {
                setErrors(errors => ({ ...errors, [e.target.name]: false }));
            }
        }
    };

    const { setUserData } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            const userData = await authService.register(formData);
            if (userData?.message) {
                console.log(userData.message);
                return setErrors({ ...errors, serverErrors: userData.message });
            }
            setUserData(userData);
            navigate('/photos/user/profile');
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <>
            <div className={styles["log-form"]}>
                <h2>Register a new account</h2>
                <form className={styles["register"]} onSubmit={onSubmitHandler}>

                    <input
                        name="email"
                        type="text"
                        title="email"
                        placeholder="email"
                        onChange={onChangeHandler}
                        onBlur={onBlurHandler}
                    />

                    <input
                        name="password"
                        type="password"
                        placeholder="password"
                        onChange={onChangeHandler}
                        onBlur={onBlurHandler}
                    />

                    <button type="submit" className={styles["btn"]}>Register</button>

                    <Link className={styles["existing"]} to="/auth/login">Already a member? Login Here!</Link>

                </form>
            </div >
            
            {(errors.email || errors.password || errors.serverErrors) &&
                <div className={styles["errors"]}>
                    {errors.email &&
                        <p className="error" >
                            Valid email required!
                        </p>}
                    {errors.password &&
                        <p className="error" >
                            Password must be between 6 and 12 characters!
                        </p>}
                    {errors.serverErrors &&
                        <p className="error" >
                            {errors.serverErrors}
                        </p>}
                </div>
            }
        </>
    )
}