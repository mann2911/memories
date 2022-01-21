import axios from "axios";

const url = "http://localhost:5000/posts";

export const fetchPosts = () => {
  return axios.get(url);
};

export const createPost = (newPost) => {
  axios.post(url, newPost);
};

export const updatePost = (id, post) => {
  axios.patch(`${url}/${id}`, post);
};

export const deletePost = (id) => {
  axios.delete(`${url}/${id}`);
};

export const likePost = (id) => {
  axios.patch(`${url}/${id}/likepost`).then((res) => {
    console.log("res", res);
    return res.data;
  });
};
