import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Register.module.css';


export const Register = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    

    return (
            <div className={styles["log-form"]}>
                <h2>Register a new account</h2>
                <form className={styles["register"]}>

                    <input type="text" title="email" placeholder="email" name="email" />

                    {/* <p className={styles["error"]}>
                        Email is required!
                    </p> */}

                    <input type="password" placeholder="password" name="password" />

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