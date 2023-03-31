import { Link } from 'react-router-dom';
import styles from './Login.module.css';


export const Login = () => {
    return (

        <div className={styles["log-form"]}>
            <h2>Login to your account</h2>
            <form className={styles.login}>

                <input type="text" title="email" placeholder="email" />
                {/* <p className="error" >
                    Email is required!
                </p> */}

                <input type="password" placeholder="password" />

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