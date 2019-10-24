import React, { Component } from 'react';

import * as api from '../api';

class SingleStudent extends Component {
  state = { student: {} };

  componentDidMount() {
    api.getStudentDataById(this.props.id).then(singleStudent => {
      console.log(singleStudent, '<---- singleStudent');
      this.setState({ student: { singleStudent } });
    });
  }

  render() {
    return <div>Single Student here...{this.props.id}</div>;
  }
}

export default SingleStudent;
