
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

        // const result = await response.json();
        // return result;
        // console.log(result);
    } catch (error) {
        console.log(error);
    }

};

export const getAllPhotos = async () => {
    try {
        const response = await fetch(`${baseUrl}/photos`)
        const result = await response.json();
        // console.log(result);
        return result;
    } catch (error) {
        console.log(error.message)
        return [];
    }
};

export const getPhotoById = async (photoId) => {
    try {
        const response = await fetch(`${baseUrl}/photos/${photoId}`);
        const result = await response.json();
        // console.log(result);
        return result;
    } catch (error) {
        console.log(error.message)
        return [];
    }
};

export const getRecentPhotos = async () => {
    try {
        const response = await fetch(`${baseUrl}/photos/most-recent`);
        const result = response.json();
        return result;
    } catch (error) {
        console.log(error.message);
        return [];
    }
};

export const deletePhotoById = async (photoId, token) => {
    try {
        const response = await fetch(`${baseUrl}/photos/${photoId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'X-Authorization': token
            }
        });
        const result = await response.json();
        return result;
    } catch (error) {
        return error;
    }
};

export const editPhoto = async (photo, token) => {
    try {
        const response = await fetch(`${baseUrl}/photos/${photo._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': token
            },
            body: JSON.stringify(photo)
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error.message)
        return error;
    }
}

export const getPhotosByOwner = async (token) => {
    try {
        const response = await fetch(`${baseUrl}/auth/profile`, {
            headers: {
                'X-Authorization': token
            }
        });
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.log(error.message);
        return [];
    }
}

export const likePhoto = async (photoId, token) => {
    try {
        const response = await fetch(`${baseUrl}/photos/${photoId}/like`, {
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': token
            }
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error.message);
        return error;
    }
}
