import React from 'react';
import './css/SchoolCard.css';

function SchoolCard(props) {
  return(
    <div className="col-4">
      <div className="card">
        <h5 className="card-header">{props.school.ENTITY_NAME}</h5>
        <div className="card-body">
          <h5 className="card-title">
            <span className="badge">2017-18</span>
            <span className="badge">2016-17</span>
            <span className="badge">Archive</span>
          </h5>
          <span className="badge badge-header">Student Data</span>
          <ul className="list-group">
            <li className="list-group-item">Enrollment Data</li>
            <li className="list-group-item">Number ELL: {props.school.NUM_ELL}</li>
            <li className="list-group-item">Per ELL: {props.school.PER_ELL}</li>
             <li className="list-group-item">Num Black: {props.school.NUM_BLACK}</li>
            <li className="list-group-item">Num White: {props.school.NUM_WHITE}</li>
            <li className="list-group-item">Num Hispanic: {props.school.NUM_HISP}</li>
            <li className="list-group-item">Num MIGRANT: {props.school.NUM_MIGRANT}</li>
            <li className="list-group-item">Num HOMELESS: {props.school.NUM_HOMELESS}</li>
            <li className="list-group-item">Num FOSTER: {props.school.NUM_FOSTER}</li>
          </ul>
          <span className="badge badge-header">School Data</span>
          <ul className="list-group">
            <li className="list-group-item">School Report Card</li>
            <li className="list-group-item">Student and Educator Report</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SchoolCard;
