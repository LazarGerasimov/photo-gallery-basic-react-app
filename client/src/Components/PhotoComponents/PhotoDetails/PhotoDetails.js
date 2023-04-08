import { useContext, useEffect, useState } from "react"
import * as apiService from '../../../services/apiService';
import { useNavigate, useParams } from "react-router-dom";
import styles from './PhotoDetails.module.css';
import { AuthContext } from "../../../contexts/AuthContext";


export const PhotoDetails = () => {

    const [photo, setPhoto] = useState([]);
    const [likes, setLikes] = useState([]);
    const [isLiked, setIsLiked] = useState(undefined);

    const { photoId } = useParams();

    const { user } = useContext(AuthContext);

    const navigate = useNavigate();

    useEffect(() => {
        apiService.getPhotoById(photoId)
            .then(data => {
                setPhoto(data);
                setLikes(data.likes);
                setIsLiked(data.likes.includes(user._id));
                // console.log(data.likes);
            })
    }, [isLiked]);

    const onPhotoDeleteHandler = async (e) => {
        e.preventDefault();

        try {
            await apiService.deletePhotoById(photoId, user.accessToken);
            navigate('/photos/user/profile');
        } catch (error) {
            console.log(error.message);
        }
    }

    const testClick = () => {
        // console.log(photo);
        console.log(photo.likes);
        // setIsLiked(state => !state);
        console.log(isLiked);
    }

    const onLikeClickHandler = () => {
        setIsLiked(state => !state);
        try {
            apiService.likePhoto(photo._id, user.accessToken)
                .then(data => {
                    setLikes(data);
                    // setIsLiked(true);
                })
        } catch (error) {
            console.log(error.message);
        }
    }

    // const onUnlikeClickHandler = () => {
    //     setIsLiked(state => !state);
    //     try {
    //         apiService.unlikePhoto(photo._id, user.accessToken)
    //             .then(data => {
    //                 setLikes(data);
    //                 // setIsLiked(true);
    //             })
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // }

    const onEditClick = () => {
        navigate(`/photos/${photoId}/edit`);
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
                            <button type="submit" className={styles["edit-btn"]} onClick={onEditClick} photo={photo} > Edit</button >
                            <button type="submit" className={styles["delete-btn"]} onClick={onPhotoDeleteHandler} > Delete</button >
                            <span className={styles["heart-span"]}><img className={styles["heart-img"]} src={'/images/red-heart.png'} alt="" />{likes?.length}</span>
                        </div>

                        :

                        <div className={styles["photo-details-button-wrapper"]}>
                            {!isLiked &&
                                <button type="submit" className={styles["like-btn"]} onClick={onLikeClickHandler}><i className="fa-solid fa-thumbs-up"></i> Like </button >
                            }
                            {/* {isLiked &&
                                <button type="submit" className={styles["unlike-btn"]} onClick={onUnlikeClickHandler}><i className="fa-regular fa-thumbs-down"></i> Unlike </button >
                            } */}
                            <span className={styles["heart-span"]}><img className={styles["heart-img"]} src={'/images/red-heart.png'} alt="" />{likes?.length}</span>
                        </div>

                    }
                </>
                : <div className={styles["photo-details-button-wrapper"]}>
                    <span className={styles["heart-span"]}><img className={styles["heart-img"]} src={'/images/red-heart.png'} alt="" />{likes?.length}</span>
                </div>
            }


        </div >
    )
}

