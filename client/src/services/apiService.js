


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
        console.log(result);
    } catch (error) {

    }


}