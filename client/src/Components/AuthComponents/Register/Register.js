import { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import * as userService from '../../../services/authService'
import { Link, useNavigate } from 'react-router-dom';
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

    const { setUserData } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            const userData = await userService.register(formData);
            setUserData(userData);
            navigate('/');
        } catch (error) {
            console.log(error)
        }
       
    }

    
    return (
        <div className={styles["log-form"]}>
            <h2>Register a new account</h2>
            <form className={styles["register"]} onSubmit={onSubmitHandler}>

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