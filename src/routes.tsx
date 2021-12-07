import react from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Cv from './components/Cv'
import About from './components/About'
import Projects from './components/RepositoryList'
import Header from './components/Header';

export default function routes(){
  return (
      <Router>
        <Routes>
          <Route element={<Cv />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Projects />} path="/projects" />
        </Routes>
      </Router>
  )
}
