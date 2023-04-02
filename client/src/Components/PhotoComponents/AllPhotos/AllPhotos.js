import { useEffect, useState } from "react"

import * as apiService from '../../../services/apiService';



export const AllPhotos = () => {

    const [photos, setPhotos] = useState([]);

    const testClick = () => {
        console.log(photos)
    }

    useEffect(() => {
        apiService.getAllPhotos()
            .then(data => {
                setPhotos(data);
            })
    }, []); // will be executed once upon component mounting

    return (
        <>
        <h1>All Photos</h1>
        <button onClick={testClick}>Test</button>
        </>
    )
}