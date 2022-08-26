import { Route, Routes } from 'react-router-dom';
import './App.css';
import LogIn from './components/LogIn/LogIn';
import Navbar from './components/Navbar/Navbar';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/log-in' element={<LogIn/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
