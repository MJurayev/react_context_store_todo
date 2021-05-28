import axios from "axios";

export const setLoading = (dispatch, status) =>
  dispatch({ type: "SET_LOADING", payload: status });

export const setError = (dispatch, error) =>
  dispatch({
    type: "SET_ERROR",
    payload: { error: error.status, message: error.message }
  });
export const getUsers = async dispatch => {
  setLoading(dispatch, true);
  await axios
    .get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => {
      const result = res.data;
      dispatch({
        type: "SET_USERS",
        payload: result
      });
      
    })  
    .catch(error => {
      const result = "Ma'lumotlarni olishda xatolik";
      dispatch({
        type: "SET_ERROR",
        payload: {
          error: true,
          message: result
        }
      });
    });
};
