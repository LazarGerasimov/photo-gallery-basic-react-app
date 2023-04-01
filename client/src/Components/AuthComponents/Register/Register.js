import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Register.module.css';


export const Register = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const onChangeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData);
    };


    return (
        <div className={styles["log-form"]}>
            <h2>Register a new account</h2>
            <form className={styles["register"]}>

                <input
                    name="email"
                    type="text"
                    title="email"
                    placeholder="email"
                    onChange={onChangeHandler}
                />

                {/* <p className={styles["error"]}>
                        Email is required!
                    </p> */}

                <input
                    name="password"
                    type="password"
                    placeholder="password"
                    onChange={onChangeHandler}
                />

                {/* <p className="error">
                    Password is required!
                    </p> */}

                {/* <p className="error">
                    Password must be at least 5 symbols!
                    </p> */}

                <button type="submit" className={styles["btn"]}>Register</button>

                <Link className={styles["existing"]} to="/auth/login">Already a member? Login Here!</Link>

            </form>
        </div >
    )
}