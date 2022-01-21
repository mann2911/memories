import axios from "axios";
import {
  FETCH_ALL,
  CREATE,
  DELETE,
  UPDATE,
  LIKEPOST,
} from "../constants/actionTypes.js";

const url = "https://memories-project-mann.herokuapp.com/posts";
//Action Creators
//thunk is used for async operations
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(url);

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPosts = (newPost) => async (dispatch) => {
  try {
    const { data } = await axios.post(url, newPost);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await axios.patch(`${url}/${id}`, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await axios.delete(`${url}/${id}`);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await axios.patch(`${url}/${id}/likepost`);
    dispatch({ type: LIKEPOST, payload: data });
  } catch (error) {
    console.log(error);
  }
};
