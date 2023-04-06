import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home/HomePage';
import Listing from './Listing/Listing';
import Details from './Details/Details';
import SWO from './SWO/SWO';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/listing/:name' element={<Listing />} />
        <Route path='/details/:name' element={<Details />} />
        <Route path='/services-we-offer' element={<SWO />} />
      </Routes>
    </Router>
  );
}

export default App;
