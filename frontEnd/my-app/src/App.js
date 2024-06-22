// import './App.css';

import React from "react";


import Account from './pages/Manage/Account/Account'
import Game from './pages/Manage/GameImage/Game'
import Gametypes from "./pages/Manage/GameTypess/GameTypes";

import { Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';

function App() {


  return (
    
    
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route  path="/" element={<Account />} />
          <Route  path="/:id" element={<Account />} />
          <Route path="/game" element={<Game />} />
          <Route path="/gametypes" element={<Gametypes />} />

        </Routes>
      </Router>
    </div>
  
  );
}


export default App;
