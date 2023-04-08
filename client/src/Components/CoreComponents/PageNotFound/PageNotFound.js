
import { Link } from 'react-router-dom'
import styles from './PageNotFound.module.css'

export const PageNotFound = () => {
    return (
            <div className={styles["error-wrapper"]}>
                <h1>Error <span className="errorcode">404</span></h1>
                <p className="output">The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
                <p className="output">Try to go back to <Link to={'/'}>homepage</Link>.</p>
                <p className="output">Good luck.</p>
            </div>
    )
}