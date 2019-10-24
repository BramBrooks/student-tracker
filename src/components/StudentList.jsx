import React, { Component } from 'react';
import * as api from '../api';
import StudentCard from './StudentCard';
import SingleStudent from './SingleStudent';
import { Router } from '@reach/router';

class StudentList extends Component {
  state = { students: [] };

  componentDidMount() {
    console.log('mounting...');
    api.getStudentData().then(studentData => {
      this.setState({ students: studentData.students });
    });
  }

  render() {
    return (
      <ul>
        <Router>
          <SingleStudent path="/:id" />
        </Router>
        {this.state.students.map(student => (
          <StudentCard student={student} key={student._id} />
        ))}
      </ul>
    );
  }
}

export default StudentList;
