import './App.css';
import { Routes, Route, Router } from 'react-router-dom';


import Navbar from './components/Navbar';
import Home from './components/pages/Home'
import AboutUs from './components/pages/AboutUs';
import Booking from './components/pages/Booking';
import Gallery from './components/pages/Gallery';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import Reviews from './components/pages/Reviews';

function App() {
  return (
    <div className="App">
      <>
      <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/about-us' element={<AboutUs/>}/>
          <Route path='/bookings' element={<Booking/>}/>
          <Route path='/reviews' element={<Reviews/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>  
    </>
    </div>
  );
}

export default App;
