import { Route, Routes } from 'react-router-dom';
import './App.css';
import LogIn from './components/LogIn/LogIn';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/log-in' element={<LogIn/>}/>
      </Routes>
    </div>
  );
}

export default App;
