import react from 'react';
import { Route, BrowserRouter as } from 'react-router-dom';

import Cv from './components/Cv'
import About from './components/About'
import Projects from './components/RepositoryList'

function Routes(){
  return (
    <BrowserRouter>
      <Route component = { Cv } path="/" exact />
      <Route component = { About } path="/about" />
      <Route component = { Projects } path="/projects" />
    </BrowserRouter>
  )
}

export default Routes;