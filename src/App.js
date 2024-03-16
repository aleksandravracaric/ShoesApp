import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import ShoesHeader from './components/ShoesHeader';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
