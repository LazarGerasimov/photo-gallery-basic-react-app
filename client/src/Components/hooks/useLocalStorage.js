import { useState } from "react"



export const useLocalStorage = (key, initialValue) => {
    
    const [state, setState] = useState(initialValue);

    const setLocalStorageState = (value) => {

        // set values simultaneously in state and local storage
        setState(value);
        localStorage.setItem(key, JSON.stringify(value));
    }

    return [
        state,
        setLocalStorageState
    ]
};

