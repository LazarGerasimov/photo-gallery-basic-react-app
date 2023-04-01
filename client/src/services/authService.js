import { useNavigate } from "react-router-dom";

const baseUrl = `http://localhost:3030`;


export const login = async (data) => {

    try {
        const response = await fetch(`${baseUrl}/auth/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        const result = await response.json();

        if (response.ok) {
            return result
        } else {
            throw new Error(result.error);
        }

    } catch (error) {
        return error
    }
}


export const register = async (data) => {

    try {
        const response = await fetch(`${baseUrl}/auth/register`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        if (response.ok) {
            return result
        } else {
            throw new Error(result.error);
        }

    } catch (error) {
        return error
    }

}


export const logout = () => {
    fetch(`${baseUrl}/auth/logout`);
}

