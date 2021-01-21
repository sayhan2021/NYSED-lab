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
      <SchoolCard school={data[4]} />
      <SchoolCard school={data[5]} />
      <SchoolCard school={data[6]} />
      <SchoolCard school={data[7]} />
      <SchoolCard school={data[8]} />
      <SchoolCard school={data[9]} />
      <SchoolCard school={data[10]} />
      <div className="container">
        <div className="row">

        </div>
      </div>
    </div>
  );
}

export default App;
