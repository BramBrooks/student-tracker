import axios from "axios";

export const getStudentData = () => {
  return axios
    .get("https://nc-student-tracker.herokuapp.com/api/students")
    .then(response => {
      return response.data;
    });
};

export const getStudentDataById = id => {
  return axios
    .get(`https://nc-student-tracker.herokuapp.com/api/students/${id}`)
    .then(response => {
      return response.data;
    });
};
