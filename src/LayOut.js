import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Elections from './pages/Elections'
import Results from './pages/Results';
import WhatWeDo from './components/WhatWeDo';
import ElectionCard from './pages/ElectionCard';
import CandidateSelection from './components/CandidateSelection';
import CastVote from './components/CastVote';
import VoteConfirmation from './components/VoteConfirmation';
import ElectionResults from './components/ElectionResults';
import Navbar from './components/NavBar';
import Footer from './components/Footer';

const LayOut = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/elections' element={<Elections/>}></Route>
            <Route path='/results' element={<Results/>}></Route>
            <Route path='/about' element={<WhatWeDo/>}></Route>
            <Route path='/election-card' element={<ElectionCard/>}></Route>
            <Route path='/select-candidate' element={<CandidateSelection/>}></Route>
            <Route path='/cast-vote' element={<CastVote/>}></Route>
            <Route path='/vote-confirmed' element={<VoteConfirmation/>}></Route>
            <Route path='/candidate-result' element={<ElectionResults/>}></Route>
            <Route path='/election-result' element={<ElectionResults/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default LayOut
