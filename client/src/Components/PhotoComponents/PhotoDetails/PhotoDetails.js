import { useEffect, useState } from "react"
import * as apiService from '../../../services/apiService';
import { useParams } from "react-router-dom";


export const PhotoDetails = () => {

    const [photo, setPhoto] = useState();
    const {photoId} = useParams();

    useEffect(() => {
        apiService.getPhotoById(photoId)
            .then(data => {
                setPhoto(photo);
                console.log(photo);
            })
    }, [])



    return (
        <h1>{photoId}</h1>
    )
}