import { Link } from "react-router-dom"
import './HomePage.css';


export const HomePage = () => {
    return (
        <>

            {/* if !user */}
            <div className="home-container">
                <h2>Check our latest photos <Link className="link" to="/photos/most-recent">here</Link> </h2>
                <h1>Welcome to our gallery</h1>
            </div>

            {/* if user */}
            {/* <div className="home-container">
                <h2>Check our latest photos <Link to="/photos">here</Link> </h2>
                <h1>Welcome to our gallery</h1>
            </div> */}

        </>
    )
}