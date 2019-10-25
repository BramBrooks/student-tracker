import React, { Component } from 'react';

import * as api from '../api';

class SingleStudent extends Component {
  state = { student: {} };

  componentDidMount() {
    api.getStudentDataById(this.props.id).then(singleStudent => {
      console.log(`singleStudent`, singleStudent);
      this.setState({ student: singleStudent.student });
    });
  }

  render() {
    const student = this.state.student;

    console.log(student.name, '<<< student.name');
    return (
      // <p>student here</p>
      <ul>
        <h2>Student Profile</h2>
        <h3>{student.name}</h3>
        <p>Starting cohort: {student.startingCohort}</p>
        <p>
          Current block:
          {student.blockHistory &&
            student.blockHistory[student.blockHistory.length - 1].name}
        </p>
      </ul>
    );
  }
}

export default SingleStudent;
