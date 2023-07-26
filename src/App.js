
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SignUp from './components/pages/Signup.js';
import Trailer from './components/pages/assets/Trailer.js';



function App() {
  return (
  <>
    
    <Router>
      <Navbar />
      <Routes>
      <Route path='/' exact element={ <Home />}></Route>
      <Route path='/services' exact element= { <Services />}></Route>
      <Route path='/products' exact element= { <Products />}></Route>
      <Route path='/signup' exact element= { <SignUp />}></Route>    
      <Route path='/assets/trailer' exact element= { <Trailer />}></Route>  
      </Routes>
      </Router></>
  );
}

export default App;
