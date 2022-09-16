import './App.css';
import Navbar from './pages/Sheard/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar2 from './pages/Sheard/Navbar2';

function App() {
  return (
    <div>
      
     <Navbar></Navbar>
     <Navbar2></Navbar2>
     <Routes>
       <Route path='/' element={<Home></Home>}>Home</Route>
      
     </Routes>
    </div>
  );
}

export default App;
