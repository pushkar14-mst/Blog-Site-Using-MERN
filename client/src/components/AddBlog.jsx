import { useState } from "react";
import axios from "axios";
import AdminPage from "../pages/AdminPage";

const AddBlog = (props) => {
  const { title, image, description: content, gerne } = props.blog;
  const postBlog = async () => {
    axios
      .post("http://localhost:5000/blog/add-blog", {
        title,
        image,
        content,
        gerne,
      })
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <div className="">
      <p>Blog Added Successfully</p>
      <AdminPage onReadyToPostBlog={postBlog} />
    </div>
  );
};

export default AddBlog;
