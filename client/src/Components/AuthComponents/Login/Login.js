import { Link, useNavigate } from 'react-router-dom';

import { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

import styles from './Login.module.css';
import * as userService from '../../../services/authService';
export const Login = () => {

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
        // console.log(formData);
    };

    const onBlurHandler = (e) => {
        if (e.target.name === 'email') {
            const emailRegexValidator = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/;
            if (!e.target.value.match(emailRegexValidator)) {
                setErrors(errors => ({ ...errors, [e.target.name]: true }));
            }
        }
        if (e.target.name === 'password') {
            if (e.target.value.length < 6 || e.target.value.length > 12) {
                setErrors(errors => ({ ...errors, [e.target.name]: true }));
            }
        }
    }

    const { setUserData } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            const userData = await userService.login(formData);
            setUserData(userData);
            navigate('/');
        } catch (error) {
            console.log(error.message);
        }
    }



    return (

        <div className={styles["log-form"]}>
            <h2>Login to your account</h2>
            <form className={styles.login} onSubmit={onSubmitHandler}>

                <input
                    name='email'
                    type="text"
                    title="email"
                    placeholder="email"
                    onChange={onChangeHandler}
                />
                {/* <p className="error" >
                    Email is required!
                </p> */}

                <input
                    name='password'
                    type="password"
                    placeholder="password"
                    onChange={onChangeHandler}
                />

                {/* <p className="error" >
                    Password is required!
                </p> */}

                {/* <p className="error" >
                    Password must be at least 5 symbols!
                </p> */}

                <button type="submit" className={styles.btn}>Login</button>
                <Link className={styles.existing} to="/auth/register">Not a member? Register Here!</Link>
            </form >
        </div >
    )
}