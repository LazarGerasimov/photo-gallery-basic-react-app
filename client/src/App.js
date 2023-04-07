import { AuthContext } from './contexts/AuthContext';
import { useLocalStorage } from './hooks/useLocalStorage';
import * as userService from './services/authService';

import { Routes, Route, useNavigate } from 'react-router-dom';

import { Header } from './Components/CoreComponents/Header/Header';
import { HomePage } from './Components/CoreComponents/HomePage/HomePage';
import { Login } from './Components/AuthComponents/Login/Login';
import { Register } from './Components/AuthComponents/Register/Register';
import { AddPhoto } from './Components/PhotoComponents/AddPhoto/AddPhoto';
import './App.css';
import { AllPhotos } from './Components/PhotoComponents/AllPhotos/AllPhotos';
import { PhotoDetails } from './Components/PhotoComponents/PhotoDetails/PhotoDetails';
import { RecentPhotos } from './Components/PhotoComponents/RecentPhotos/RecentPhotos';
import { Profile } from './Components/AuthComponents/Profile/Profile';
import { EditPhoto } from './Components/PhotoComponents/EditPhoto/EditPhoto';


function App() {

    const [user, setUser] = useLocalStorage('auth', null);

    const setUserData = (userData) => {
        setUser({ ...userData });
    }

    const onLogoutHandler = () => {
        setUser(null);
        localStorage.clear();
        userService.logout();
    }


    return (
        <AuthContext.Provider value={{ user, setUserData, onLogoutHandler }}>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />

                <Route path='/auth/login' element={<Login />} />
                <Route path='/auth/register' element={<Register />} />
                <Route path='/photos/profile' element={<Profile />}/>

                <Route path='/photos' element={<AllPhotos />} />
                <Route path='/photos/create' element={<AddPhoto />} />
                <Route path='/photos/:id/edit' element={<EditPhoto />} />
                <Route path='/photos/:photoId' element={<PhotoDetails />}/>
                <Route path='/photos/most-recent' element={<RecentPhotos />}/>


            </Routes>
        </AuthContext.Provider>
    );
}

export default App;
