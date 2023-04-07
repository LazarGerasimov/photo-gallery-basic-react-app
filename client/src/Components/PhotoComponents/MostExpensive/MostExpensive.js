import { useEffect, useState } from "react"
import * as apiService from '../../../services/apiService';


export const MostExpensive = () => {

    const [mostExpensive, setMostExpensive] = useState([]);

    useEffect(() => {
        apiService.getMostExpensive()
            .then(data => {
                setMostExpensive(data);
                console.log(data)
            })
    }, []);

    return (
        <h1>Most Expensive</h1>
    )
}