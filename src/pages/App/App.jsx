import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import ServicesSection from '../../components/ServicesSection/ServicesSection'; 
import ContactPage from '../ContactPage/ContactPage';
import ResultsPage from '../../pages/ResultsPage/ResultsPage';
import AboutPage from '../../pages/AboutPage/AboutPage';
import HomePage from '../HomePage/HomePage';
import GoogleAds from '../GoogleAds/GoogleAds';


export default function App() {
  return (
    <main className="App">
      {
        <Routes>
          <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesSection />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/results" element={<ResultsPage />} />
              <Route path="/google-ads" element={<GoogleAds />} />
        </Routes>
      }
      <NavBar />
      <ServicesSection />
      <ContactPage />

    </main>
  );
}