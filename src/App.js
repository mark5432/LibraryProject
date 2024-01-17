import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Books from './Books';
import Footer from './Footer'
import Login from './Login';
import './App.css';

const App = () => {
  return (
    <Router>

      <div className="app-container">
        <Navbar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          
        </div>
        
        
        <Footer />
       

        
      </div>
      
    </Router>
  );
};

export default App;
