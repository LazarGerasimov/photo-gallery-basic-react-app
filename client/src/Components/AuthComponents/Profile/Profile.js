
import { Link } from 'react-router-dom'
import styles from './Profile.module.css'
import { useContext, useEffect, useState } from 'react'
import * as apiService from '../../../services/apiService';
import { AuthContext } from '../../../contexts/AuthContext';

export const Profile = () => {

    const [profilePhotos, setProfilePhotos] = useState([]);

    const { user } = useContext(AuthContext);

    const username = user.email.split("@")[0];

    useEffect(() => {
        let ownerArray = [];
        apiService.getAllPhotos()
            .then(data => {
                data.map(p => {
                    if (p._ownerId === user._id) {
                        ownerArray.push(p);
                    }
                    // console.log(ownerArray);
                })
                setProfilePhotos(ownerArray);
            })
    }, [])

    const testClick = () => {
        console.log(profilePhotos);
        console.log(user);
        console.log(username)

    }

    return (
        <>
            <div className={styles["profile-wrapper"]}>
                <div className={styles["name-image-wrapper"]}>
                    <h1>Hello, {username}</h1>
                    <img src='/images/camera-gender-fluid.jpg' />
                </div>
                <div className={styles["owner-photos-wrapper"]}>
                    <h1>Your collection:</h1>
                    {profilePhotos.length > 0
                        ? 
                        <div className={styles["owner-photos-container"]}>

                        </div>
                        : 
                        <div className={styles["no-owner-photos-container"]}>
                            <p>You have not uploaded any photos yet.</p>
                            <p>If you are looking for inspiration, check the photos uploaded by the others <Link>here</Link></p>
                        </div>
                    }

                </div>
            </div>
        </>
    )
}