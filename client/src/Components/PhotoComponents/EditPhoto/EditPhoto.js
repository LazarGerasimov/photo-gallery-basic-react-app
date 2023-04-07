import * as apiService from '../../../services/apiService';
import { useContext, useEffect, useState } from 'react';
import styles from './EditPhoto.module.css';
import { AuthContext } from '../../../contexts/AuthContext';
import { useNavigate, useParams } from 'react-router-dom';

export const EditPhoto = () => {

    const { photoId } = useParams();
    const { user } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        price: "",
        imageUrl: "",
        _ownerId: user._id
    });

    useEffect(() => {
        apiService.getPhotoById(photoId)
            .then(data => {
                setFormData(data);
                console.log(data);
                console.log(photoId)
            })
    }, []);

   
    const onChangeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData);
    }

    const navigate = useNavigate();

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            await apiService.editPhoto(formData, user.accessToken);
            navigate(`/photos/${photoId}`)
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    return (
        <div className={styles["log-form"]}>
            <h2>Edit your photo</h2>
            <form className={styles["register"]} onSubmit={onSubmitHandler}>

                <input name="title" type="text" title="title" placeholder="title" defaultValue={formData.title} onChange={onChangeHandler} />

                {/* <p className={styles["error"]} >
                    Title is required!
                </p> */}

                <input name="description" type="text" placeholder="description" defaultValue={formData.description} onChange={onChangeHandler} />

                {/* <p className={styles["error"]} >
                    Description is required!
                </p > */}

                {/* <p className={styles["error"]} >
                    Description must be at least 10 symbols!
                </p > */}

                <input name="price" type="text" placeholder="price" defaultValue={formData.price} onChange={onChangeHandler} />

                {/* <p className={styles["error"]} >
                    Price must be at least 5 GBP!
                </p > */}

                <input name="imageUrl" type="text" title="img" placeholder="imageUrl" defaultValue={formData.imageUrl} onChange={onChangeHandler} />

                {/* <p className={styles["error"]} >
                    Image URL is required!
                </p > */}

                <button type="submit" className={styles["btn"]}>Upload</button>

            </form >
        </div >
    )
}