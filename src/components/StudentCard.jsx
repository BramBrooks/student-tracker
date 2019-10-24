import React from "react";

const StudentCard = ({ student }) => {
  console.log(student, "<---- student");
  return (
    <>
      <li>
        <p>Student: {student.name}</p>
        <p>Current Block: {student.currentBlock}</p>
        <p>Starting Cohort: {student.startingCohort}</p>
        <br></br>
      </li>
    </>
  );
};

export default StudentCard;
