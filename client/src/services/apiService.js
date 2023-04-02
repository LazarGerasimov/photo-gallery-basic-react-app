
const baseUrl = `http://localhost:3030`;


export const uploadPhoto = async (data, token) => {
  
    try {
        const response = await fetch(`${baseUrl}/photos/create`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-Authorization': token
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        // console.log(result);
    } catch (error) {
        console.log(error);
    }

};

export const getAllPhotos = async () => {
    try {
        const response = await fetch(`${baseUrl}/photos`)
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.log(error.message)
        return [];
    }
}

export const getPhotoById = async (photoId) => {
    try {
        const response = await fetch(`${baseUrl}/${photoId}`);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.log(error.message)
        return [];
    }
}