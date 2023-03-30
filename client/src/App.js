import logo from './logo.svg';
import './App.css';

import { Routes, Route, useNavigate } from 'react-router-dom';
import { Header } from './Components/CoreComponents/Header';
import { HomePage } from './Components/CoreComponents/HomePage';

function App() {
  return (
    <>
      <Header />
        <Routes>
            <Route path='/' element={<HomePage />}/>
        </Routes>
    </>
  );
}

export default App;
