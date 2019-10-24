import axios from "axios";

const getStudentData = () => {
  return axios
    .get("https://nc-student-tracker.herokuapp.com/api/students")
    .then(response => {
      return response.data;
    });
};

export default getStudentData;
