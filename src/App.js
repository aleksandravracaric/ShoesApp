import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import ShowDetail from './components/ShoeDetail';
import ErrorPage from './components/ErrorPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} ></Route>
        <Route path="/shoe/" element={<ShowDetail />} ></Route>
        <Route path="/error/" element={<ErrorPage />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
