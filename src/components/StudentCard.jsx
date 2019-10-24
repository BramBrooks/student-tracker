import React from 'react';
import { Link } from '@reach/router';

const StudentCard = ({ student }) => {
  console.log(student, '<---- student');
  return (
    <>
      <Link to={`/students/${student._id}`}>
        <li>
          <p>Student: {student.name}</p>
          <p>Current Block: {student.currentBlock}</p>
          <p>Starting Cohort: {student.startingCohort}</p>
          <br></br>
        </li>
      </Link>
    </>
  );
};

export default StudentCard;
