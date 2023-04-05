import { useEffect, useState } from "react"
import * as apiService from '../../../services/apiService';
import { useParams } from "react-router-dom";
import styles from './PhotoDetails.module.css';


export const PhotoDetails = () => {

    const [photo, setPhoto] = useState([]);
    const { photoId } = useParams();

    useEffect(() => {
        apiService.getPhotoById(photoId)
            .then(data => {
                setPhoto(data);
                console.log(photo);
            })
    }, [])


    return (
        <div className={styles["photo-details"]}>
            <div className={styles["photo-details-wrapper"]}>
                <figure>
                    <img src={photo.imageUrl} alt="img" />
                </figure>
                <h3>{photo?.title}</h3>
                <h2>£{photo?.price}</h2>
                <p>{photo?.description}</p>
            </div>

            {/* <button type="submit" className="btn">Like</button> */}

            <div className={styles["photo-details-button-wrapper"]}>
                <button type="submit" className={styles["edit-btn"]}> Edit</button >
                <button type="submit" className={styles["delete-btn"]}> Delete</button >
            </div>

        </div >
    )
}