
import { Link } from 'react-router-dom'
import styles from './Profile.module.css'
import { useContext, useEffect, useState } from 'react'
import * as apiService from '../../../services/apiService';
import { AuthContext } from '../../../contexts/AuthContext';

export const Profile = () => {

    const [profilePhotos, setProfilePhotos] = useState([]);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        apiService.getPhotosByOwner(user.accessToken)
            .then(data => {
                setProfilePhotos(data);
                console.log(data);
            })
    }, []);

    const testClick = () => {
        console.log(profilePhotos);
    }

    return (
        <>
            <h1>Profile</h1>
            <button onClick={testClick}>Test</button>
        </>
    )
}