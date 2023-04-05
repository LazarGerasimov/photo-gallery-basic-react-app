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
                // console.log(photo);
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
                <button type="submit" className={styles["delete-btn"]} onClick={onPhotoDeleteHandler} > Delete</button >
            </div>

        </div >
    )
}