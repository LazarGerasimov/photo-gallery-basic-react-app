


import { useEffect, useState } from 'react';
import * as apiService from '../../../services/apiService';
import styles from './RecentPhotos.module.css';
import { Link, useNavigate } from 'react-router-dom';

export const RecentPhotos = () => {

    const [recentPhotos, setRecentPhotos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        apiService.getRecentPhotos()
            .then(data => {
                setRecentPhotos(data);
                // console.log(data);
            })
    }, []);

    return (
        <>
            <h1 className={styles["recent-photos-h1"]}>Our latest photos</h1>
            <div className={styles["recent-photos-wrapper"]}>
                <div className={styles["our_photos"]}>
                    {recentPhotos.map((photo) => {

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
            <p className={styles["see-all-content-message"]}>To see all available content in our gallery, please <Link to={'/auth/login'}>log in</Link></p>
        </>
    )
}