import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home/HomePage';
import Listing from './Listing/Listing';
import Details from './Details/Details';
import SWO from './SWO/SWO';
import About from './About/About';
import Privacy from './PrivacyPolicy/Privacy';
import Terms from './TermsConditions/Terms';



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/listing/:name' element={<Listing />} />
        <Route path='/details/:name' element={<Details />} />
        <Route path='/services-we-offer' element={<SWO />} />
        <Route path='/about' element={<About />} />
        <Route path='/privacy-policy' element={<Privacy />} />
        <Route path='/terms-conditions' element={<Terms />} />
      </Routes>
    </Router>
  );
}

export default App;
