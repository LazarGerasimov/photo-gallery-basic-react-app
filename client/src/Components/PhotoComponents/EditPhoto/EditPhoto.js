import * as apiService from '../../../services/apiService';
import { useContext, useEffect, useState } from 'react';
import styles from './EditPhoto.module.css';
import { AuthContext } from '../../../contexts/AuthContext';
import { useNavigate, useParams } from 'react-router-dom';

export const EditPhoto = () => {

    const { photoId } = useParams();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        price: "",
        imageUrl: "",
        _ownerId: user._id
    });

    const [errors, setErrors] = useState({
        title: false,
        description: false,
        price: false,
        imageUrl: false,
        serverErrors: false
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
        // console.log(formData);
        setErrors(errors => ({ ...errors, [e.target.name]: false, ["serverError"]: false }))
    }

    const onBlurHandler = (e) => {
        if (e.target.name === 'title') {
            if (e.target.value.length < 5) {
                setErrors(errors => ({ ...errors, [e.target.name]: true }));
            }
        }
        if (e.target.name === 'description') {
            if (e.target.value.length < 10) {
                setErrors(errors => ({ ...errors, [e.target.name]: true }));
            }
        }
        if (e.target.name === 'price') {
            if (Number(e.target.value) < 10) {
                setErrors(errors => ({ ...errors, [e.target.name]: true }));
            } else if (typeof e.target.value !== Number) {
                setErrors(errors => ({ ...errors, [e.target.name]: true }));
            }
        }
        if (e.target.name === 'imageUrl') {
            if (e.target.value.length < 1) {
                setErrors(errors => ({ ...errors, [e.target.name]: true }));
            }
        }
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            if (Object.values(formData).some(v => v === '') || Object.values(formData).some(v => v === true)) {
                setErrors({ ...errors, ["serverErrors"]: 'All fields must be filled!' });
                return;    
            }

            const editData = await apiService.editPhoto(formData, user.accessToken);

            if (!editData) {
                setErrors({ ...errors, ["serverErrors"]: editData.message });
                return;
            }
            
            navigate(`/photos/${photoId}`)
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    return (
        <>
            <div className={styles["log-form"]}>
                <h2>Edit your photo</h2>

                <form className={styles["register"]} onSubmit={onSubmitHandler}>

                    <input
                        name="title"
                        type="text"
                        title="title"
                        placeholder="title"
                        defaultValue={formData.title}
                        onChange={onChangeHandler}
                        onBlur={onBlurHandler}
                    />

                    <input
                        name="description"
                        type="text"
                        placeholder="description"
                        defaultValue={formData.description}
                        onChange={onChangeHandler}
                        onBlur={onBlurHandler}
                    />

                    <input
                        name="price"
                        type="text"
                        placeholder="price"
                        defaultValue={formData.price}
                        onChange={onChangeHandler}
                        onBlur={onBlurHandler}
                    />

                    <input
                        name="imageUrl"
                        type="text"
                        title="img"
                        placeholder="imageUrl"
                        defaultValue={formData.imageUrl}
                        onChange={onChangeHandler}
                        onBlur={onBlurHandler}
                    />

                    <button type="submit" className={styles["btn"]}>Edit</button>

                </form >
            </div >

            {(errors.title || errors.description || errors.price || errors.imageUrl || errors.serverErrors) &&
                <div className={styles["add-photo-errors"]}>
                    {errors.title &&
                        <p className="error" >
                            Title must be at least 5 characters long!
                        </p>}
                    {errors.description &&
                        <p className="error" >
                            Description must be at least 10 characters long!
                        </p>}
                    {(errors.price) &&
                        <p className="error" >
                            Price must be a number and more than £10!
                        </p>}
                    {errors.imageUrl &&
                        <p className="error" >
                            ImageUrl is required!
                        </p>}
                    {errors.serverErrors &&
                        <p className="error" >
                            {errors.serverErrors}
                        </p>}
                </div>
            }
        </>
    )
}