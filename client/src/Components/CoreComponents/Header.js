import { Link } from 'react-router-dom';
// import styles from './Header.module.css';
import './Header.css';

export const Header = () => {
    return (
        <header>
            <div className='mini-navbar-wrap'>
                <div className="logo-wrap">
                    <p className="logo">
                        <Link>
                            <img src="/images/logo3.png" />
                        </Link>
                    </p>
                </div>
                <div className="mini-navbar">

                    {/* if not logged in */}
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
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