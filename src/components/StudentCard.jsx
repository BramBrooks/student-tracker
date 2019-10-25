import React from 'react';
import { Link } from '@reach/router';

const StudentCard = ({ student }) => {
  return (
    <>
      <Link to={`/students/${student._id}`}>
        <li>
          <h4>Student: {student.name}</h4>
          <p>Current Block: {student.currentBlock}</p>
          <p>Starting Cohort: {student.startingCohort}</p>
          <br></br>
        </li>
      </Link>
    </>
  );
};

export default StudentCard;
