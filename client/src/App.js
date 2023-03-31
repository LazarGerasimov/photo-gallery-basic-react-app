import './App.css';

import { Routes, Route, useNavigate } from 'react-router-dom';

import { Header } from './Components/CoreComponents/Header/Header';
import { HomePage } from './Components/CoreComponents/HomePage/HomePage';
import { Login } from './Components/AuthComponents/Login/Login';
import { Register } from './Components/AuthComponents/Register/Register';

function App() {
  return (
    <>
      <Header />
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/auth/login' element={<Login />}/>
            <Route path='/auth/register' element={<Register />}/>
        </Routes>
    </>
  );
}

export default App;
