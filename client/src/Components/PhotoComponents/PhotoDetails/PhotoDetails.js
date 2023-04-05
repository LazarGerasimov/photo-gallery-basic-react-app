import { useContext, useEffect, useState } from "react"
import * as apiService from '../../../services/apiService';
import { useNavigate, useParams } from "react-router-dom";
import styles from './PhotoDetails.module.css';
import { AuthContext } from "../../../contexts/AuthContext";


export const PhotoDetails = () => {

    const [photo, setPhoto] = useState([]);
    const { photoId } = useParams();

    const { user } = useContext(AuthContext);

    const navigate = useNavigate();

    useEffect(() => {
        apiService.getPhotoById(photoId)
            .then(data => {
                setPhoto(data);
            })
    }, []);

    const onPhotoDeleteHandler = (e) => {
        e.preventDefault();

        try {
            apiService.deletePhotoById(photoId, user.accessToken)
            navigate('/');
        } catch (error) {
            console.log(error.message);
        }
    }

    const testClick = () => {
        console.log(photo);
    }


    return (
        <div className={styles["photo-details"]}>
            <div className={styles["photo-details-wrapper"]}>
                <figure>
                    <img className={styles["details-main-image"]} src={photo.imageUrl} alt="img" />
                </figure>
                <h3 onClick={testClick}>{photo?.title}</h3>
                <h2>£{photo?.price}</h2>
                <p>{photo?.description}</p>
            </div>

            {user

                ? <>
                    {(user._id === photo._ownerId)

                        ?

                        <div className={styles["photo-details-button-wrapper"]}>
                            <button type="submit" className={styles["edit-btn"]}> Edit</button >
                            <button type="submit" className={styles["delete-btn"]} onClick={onPhotoDeleteHandler} > Delete</button >
                        </div>

                        :

                        <div className={styles["photo-details-button-wrapper"]}>
                            <button type="submit" className={styles["like-btn"]}><i className="fa-solid fa-thumbs-up"></i> Like </button >
                            <span className={styles["heart-span"]}><img className={styles["heart-img"]} src={'/images/red-heart.png'} alt="" />3</span>
                        </div>

                    }
                </>
                : <div className={styles["photo-details-button-wrapper"]}>
                    <span className={styles["heart-span"]}><img className={styles["heart-img"]} src={'/images/red-heart.png'} alt="" />3</span>
                </div>
            }


        </div >
    )
}