import * as apiService from '../../../services/apiService';
import { useContext, useState } from 'react';
import styles from './EditPhoto.module.css';
import { AuthContext } from '../../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export const EditPhoto = () => {
    
    const { user } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
        imageUrl: '',
        _ownerId: user._id
    });

    const onChangeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();

    }



    return (
        <div className={styles["log-form"]}>
            <h2>Edit your photo</h2>
            <form className={styles["register"]} onSubmit={onSubmitHandler}>

                <input name="title" type="text" title="title" placeholder="title" onChange={onChangeHandler} />

                {/* <p className={styles["error"]} >
                    Title is required!
                </p> */}

                <input name="description" type="text" placeholder="description" onChange={onChangeHandler} />

                {/* <p className={styles["error"]} >
                    Description is required!
                </p > */}

                {/* <p className={styles["error"]} >
                    Description must be at least 10 symbols!
                </p > */}

                <input name="price" type="text" placeholder="price" onChange={onChangeHandler} />

                {/* <p className={styles["error"]} >
                    Price must be at least 5 GBP!
                </p > */}

                <input name="imageUrl" type="text" title="img" placeholder="imageUrl" onChange={onChangeHandler} />

                {/* <p className={styles["error"]} >
                    Image URL is required!
                </p > */}

                <button type="submit" className={styles["btn"]}>Upload</button>

            </form >
        </div >
    )
}