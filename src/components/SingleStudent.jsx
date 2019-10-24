import React, { Component } from "react";

import * as api from "../api";

class SingleStudent extends Component {
  state = { student: {} };

  componentDidMount() {
    api.getStudentDataById("5da0a6b9cc4fac001792bbbf").then(singleStudent => {
      console.log(singleStudent, "<---- singleStudent");
      this.setState({ student: { singleStudent } });
    });
  }

  render() {
    return <div></div>;
  }
}

export default SingleStudent;
