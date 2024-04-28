import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Login from './components/Login';
import Home from './components/Home';
import Visit from './components/Visit';
import LanguageSelector from './components/LanguageSelector';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Container>
        <LanguageSelector />
        
        <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/Visit" element={<Visit/>}/>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
