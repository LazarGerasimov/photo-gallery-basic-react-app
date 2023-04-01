
import { Routes, Route, useNavigate } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import { useLocalStorage } from './Components/hooks/useLocalStorage';

import { Header } from './Components/CoreComponents/Header/Header';
import { HomePage } from './Components/CoreComponents/HomePage/HomePage';
import { Login } from './Components/AuthComponents/Login/Login';
import { Register } from './Components/AuthComponents/Register/Register';
import './App.css';


function App() {

    const [user, setUser] = useLocalStorage('auth', {});
    const setUserData = (userData) => {
        setUser({ ...userData });
    }


    return (
        <AuthContext.Provider value={{user, setUserData}}>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/auth/login' element={<Login />} />
                <Route path='/auth/register' element={<Register />} />
            </Routes>
        </AuthContext.Provider>
    );
}

export default App;
