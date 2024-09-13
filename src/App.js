import './App.css';
import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './NavBar';
import WhatWeDo from './WhatWeDo';
import Elections from './Elections';
import Footer from './Footer';
import ElectionResults from './ElectionResults';
import BiodataVerification from './BiodataVerification'
import RegistrationSuccess from './RegistrationSuccess'
import IdentityVerification from './IdentityVerification';

// import OngoingElect from './OngoingElect';
// import Results from './Results';
// import UpcomingElect from './UpcomingElect';
// import ElectionResults from './ElectionResults';
// import RegisterVoter from './RegisterVoter';
// import CandidateSelection from './CandidateSelection';
// import CastVote from './CastVote';
// import VoteConfirmation from './VoteConfirmation';
// import LastElectionResult from './LastElectionResult';

function App() {
  return (
  
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<WhatWeDo />} />
        <Route path='/elections' element ={<Elections />} />
        <Route path='/results' element ={<ElectionResults />} />
        <Route path='/biodata' element ={<BiodataVerification />} />
        <Route path='/regsuccess' element ={<RegistrationSuccess />} />
        <Route path='/idverify' element ={<IdentityVerification />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
