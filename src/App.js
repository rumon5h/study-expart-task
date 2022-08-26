import { Route, Routes } from 'react-router-dom';
import './App.css';
import LogIn from './components/LogIn/LogIn';
import Navbar from './components/Navbar/Navbar';
import SignUp from './components/SignUp/SignUp';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/log-in' element={<LogIn/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;
