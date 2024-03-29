import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home/HomePage';
import Listing from './Listing/Listing';
import Details from './Details/Details';
import SWO from './SWO/SWO';
import About from './About/About';
import Privacy from './PrivacyPolicy/Privacy';
import Terms from './TermsConditions/Terms';
import Shipping from './Shipping/Shipping';
import Cancellation from './Cancellation/Cancellation';
import Contact from './Contact/Contact';
import Checkout from './Checkout/Checkout';
import User from './User/User';


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
        <Route path='/shipping-delivery' element={<Shipping />} />
        <Route path='/cancellation-refund' element={<Cancellation />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/user' element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
