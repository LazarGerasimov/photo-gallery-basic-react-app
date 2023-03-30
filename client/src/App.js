import './App.css';

import { Routes, Route, useNavigate } from 'react-router-dom';
import { Header } from './Components/CoreComponents/Header';
import { HomePage } from './Components/CoreComponents/HomePage';
import { Login } from './Components/AuthComponents/Login';

function App() {
  return (
    <>
      <Header />
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/auth/login' element={<Login />}/>
        </Routes>
    </>
  );
}

export default App;
