import { Link } from 'react-router-dom';
// import styles from './Header.module.css';
// import './Header.css';
import styles from './Header.module.css';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';



export const Header = () => {

    const { user, onLogoutHandler } = useContext(AuthContext);

    const onHomeClick = () => {
        console.log(user);
    }

    return (
        <header>
            <div className={styles["mini-navbar-wrap"]}>
                <div className={styles["logo-wrap"]}>
                    <p className={styles["logo"]}>
                        <Link to='/' onClick={onHomeClick}>
                            <img src="/images/logo3.png" alt='camera-logo' />
                        </Link>
                    </p>
                </div>
                <div className={styles["mini-navbar"]}>

                    {/* if not logged in */}
                    {(user === null)

                        ?

                        <ul>
                            <li>
                                <Link to="/" onClick={onHomeClick} >Home</Link>
                            </li>
                            <li>
                                <Link to="/photos/most-recent">Recent Photos</Link>
                            </li>
                            <li>
                                <Link to="/auth/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/auth/register">Register</Link>
                            </li>
                        </ul>

                        :

                        <ul>
                            <li>
                                <Link to="/photos/most-expensive" >Most Expensive Photos</Link>
                            </li>
                            <li>
                                <Link to="/photos">All Photos</Link>
                            </li>
                            <li>
                                <Link to="/photos/create">Upload Photo</Link>
                            </li>
                            <li>
                                <Link to="auth/profile">Profile</Link>
                            </li>
                            <li>
                                <Link to="/" onClick={onLogoutHandler}>Logout</Link>
                            </li>
                        </ul>


                    }

                    {/* if logged in */}
                    {/* <ul>
                        <li>
                            <Link to="/photos/most-expensive">Most Expensive Photos</Link>
                        </li>
                        <li>
                            <Link to="/photos">All Photos</Link>
                        </li>
                        <li>
                            <Link to="/photos/create">Upload Photo</Link>
                        </li>
                        <li>
                            <Link to="auth/profile">Profile</Link>
                        </li>
                        <li>
                            <Link to="auth/logout">Logout</Link>
                        </li>
                    </ul> */}
                </div>
            </div >
        </header >
    )
}