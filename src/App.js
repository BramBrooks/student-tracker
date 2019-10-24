import React from 'react';
import Header from './components/Header';
import StudentList from './components/StudentList';
import { Router } from '@reach/router';
import NotFound from './components/NotFound';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <StudentList path="/" />
        <StudentList path="/students/*" />
        <NotFound default />
      </Router>
    </div>
  );
}

export default App;
