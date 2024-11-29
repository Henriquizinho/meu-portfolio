import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewHome from './pages/NewHome';
import NewPortfolio from './pages/NewPortfolio';
import NewContact from './pages/NewContact';
import NewNotFound from './pages/NewNotFound';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<NewHome />} />
        <Route path="/portfolio" element={<NewPortfolio />} />
        <Route path="/contact" element={<NewContact />} />
        <Route path="*" element={<NewNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
