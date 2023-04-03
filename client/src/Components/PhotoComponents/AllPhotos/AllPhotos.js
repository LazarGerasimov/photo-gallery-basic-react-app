import { useEffect, useState } from "react"

import * as apiService from '../../../services/apiService';
import styles from './AllPhotos.module.css';
import { Link, useNavigate } from "react-router-dom";


export const AllPhotos = () => {

    const [photos, setPhotos] = useState([]);
    const navigate = useNavigate();

    const testClick = () => {
        console.log(photos)
    }

    useEffect(() => {
        apiService.getAllPhotos()
            .then(data => {
                setPhotos(data);
            })
    }, []); // will be executed once upon component mounting

    return (
        <>
            <h1 className={styles["all-photos-h1"]}>All Photos</h1>
            <div className={styles["all-photos-wrapper"]}>
                <div className={styles["our_photos"]}>
                    {photos.map((photo) => {

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