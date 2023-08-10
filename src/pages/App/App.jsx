import { useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import ServicesPage from '../ServicesPage/ServicesPage';
import ContactPage from '../ContactPage/ContactPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HomePage from '../HomePage/HomePage';
import ResultsPage from '../ResultsPage/ResultsPage'



export default function App() {

  return (
    <main className="App">
          <>
            <NavBar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact-us" element={<ContactPage />} />
              <Route path="/results" element={<ResultsPage />} />
              {/* <Route path='/google-ads' element={<GoogleAdsPage />}/>
              <Route path='/facebook-ads' element={<FacebookAdsPage />}/>
              <Route path='/instagram-ads' element={<InstagramAdsPage />}/> */}
            </Routes>
            
          </>
    </main>
  );
}
