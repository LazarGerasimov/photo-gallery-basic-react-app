


import { useEffect, useState } from 'react';
import * as apiService from '../../../services/apiService';
import styles from './RecentPhotos.module.css';

export const RecentPhotos = () => {

    const [recentPhotos, setRecentPhotos] = useState([]);

    useEffect(() => {
        apiService.getRecentPhotos()
            .then(data => {
                setRecentPhotos(data);
                console.log(data);
            })
    }, []);

    return (
        <h1>Recent Photos</h1>
    )
}