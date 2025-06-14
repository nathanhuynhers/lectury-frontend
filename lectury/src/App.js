import './App.css';
import MainPage from './components/MainPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router basename='/lectury-frontend'>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;
