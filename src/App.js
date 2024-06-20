import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mainnav from './Navbar/Mainnav';
import Footer from './Footer/Footer';
import Data from './Body/Data';
import Chatting from './Body/Chat/Chatting';
import DoctorPortal from './Body/Doctor/Doctorportal';


function App() {
  return (
    <Router>
     <Mainnav/>
     <Routes>
      <Route path="/" element={<Data />} />
      <Route path="/chat/:doctorId" element={<Chatting />} />
      <Route path="/doctor" element={<DoctorPortal />} />
     </Routes>
     <Footer/>
    </Router>
  );
}

export default App;
