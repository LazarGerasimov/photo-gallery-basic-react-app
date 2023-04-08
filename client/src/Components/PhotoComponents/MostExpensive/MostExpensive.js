import { useEffect, useState } from "react"
import * as apiService from '../../../services/apiService';
import styles from './MostExpensive.module.css';
import { Link, useNavigate } from "react-router-dom";

export const MostExpensive = () => {

    const [mostExpensive, setMostExpensive] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        apiService.getMostExpensive()
            .then(data => {
                setMostExpensive(data);
                console.log(data)
            })
    }, []);

    return (
        <>
            <h1 className={styles["most-expensive-photos-h1"]}>Most Expensive Photos</h1>
            <div className={styles["most-expensive-photos-wrapper"]}>
                <div className={styles["most_expensive_photos"]}>
                    {mostExpensive.map((photo) => {

                        const navigateToDetails = () => {
                            navigate(`/photos/${photo._id}`);
                        };

                        return (
                            <div className={styles["photo_box"]} key={photo._id}>
                                <figure onClick={navigateToDetails}>
                                    <img src={photo.imageUrl} alt={photo.title} />
                                </figure>
                                <h3 onClick={navigateToDetails}><Link to={`/photos/${photo._id}`}>{photo.title}</Link></h3>
                                <h2>£{photo.price}</h2>
                                <p>{photo.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}