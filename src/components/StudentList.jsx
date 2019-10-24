import React, { Component } from "react";
import getStudentData from "../api";
import StudentCard from "./StudentCard";

class StudentList extends Component {
  state = { students: [] };

  componentDidMount() {
    getStudentData().then(studentData => {
      console.log(studentData.students);
      this.setState({ students: studentData.students });
    });
  }

  render() {
    return (
      <ul>
        {this.state.students.map(student => (
          <StudentCard student={student} key={student._id} />
        ))}
      </ul>
    );
  }
}

export default StudentList;
