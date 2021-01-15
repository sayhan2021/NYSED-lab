import React from 'react';
import Navbar from './components/Navbar.js';
 import SchoolCard from './components/SchoolCard.js';
 import data from './nycSchoolEnrollmentData.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SchoolCard school={data[0]} />
      <SchoolCard school={data[1]} />
      <SchoolCard school={data[2]} />
      <SchoolCard school={data[3]} />
      <div className="container">
        <div className="row">

        </div>
      </div>
    </div>
  );
}

export default App;
