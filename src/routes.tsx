import react from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Cv from './components/Cv'
import About from './components/About'
import Projects from './components/RepositoryList'

export default function routes(){
  return (
      <Router>
        <Routes>
          <Route element={<About />} path="/" />
          <Route element={<Cv />} path="/cv" />
          <Route element={<About />} path="/about" />
          <Route element={<Projects />} path="/projects" />
        </Routes>
      </Router>
  )
}
