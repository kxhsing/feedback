import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async dispatch => {
    const res = await axios.get("/api/current_user");
    dispatch({ type: FETCH_USER, payload: res });
};

// dispatch is function in redux-thunk, when redux-thunk sees a function returned from action creator,
// will call dispatch on result of the get request
