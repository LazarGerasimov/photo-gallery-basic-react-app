
import { Link } from 'react-router-dom'
import styles from './Profile.module.css'
import { useContext, useEffect, useState } from 'react'
import * as apiService from '../../../services/apiService';
import { AuthContext } from '../../../contexts/AuthContext';

export const Profile = () => {

    const [profilePhotos, setProfilePhotos] = useState([]);

    const { user } = useContext(AuthContext);

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
        
    }

    return (
        <>
            <h1>Profile</h1>
            <button onClick={testClick}>Test</button>
        </>
    )
}