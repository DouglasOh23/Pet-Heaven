import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Adoption from './Pages/Adoption';
import Support from './Pages/Support';
import Release from './Pages/Release';
import Bottom from './Components/Bottom';

const App = () => (
  <Router>
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Adoption" element={<Adoption />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Release" element={<Release />} />
      </Routes>
    </main>
    <Bottom/>
  </Router>
);

export default App;
