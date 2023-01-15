import { useState, Fragment } from "react";
import classes from "./AdminPage.module.css";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import DOMPurify from "dompurify";
import CustomToolbar from "../components/helpers/ReactQuillEditor/CustomToolbar";
import { useSelector, useDispatch } from "react-redux";
import { blogAction } from "../store/blog-store";
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";

import AddBlog from "../components/AddBlog";

const AdminPage = (props) => {
  const [addBlog, setAddBlog] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [description, setDescription] = useState("");
  const [gerne, setGerne] = useState("");
  const blogTitle = useSelector((state) => state.blog.blogTitle);
  const coverImage = useSelector((state) => state.blog.coverImage);
  const content = useSelector((state) => state.blog.content);
  const category = useSelector((state) => state.blog.gerne);
  const dispatch = useDispatch();
  dispatch(blogAction.addBlog({ title, image, description, gerne }));

  let navigate = useNavigate();
  const postBlog = async () => {
    setIsPosting(true);
    await axios
      .post("http://localhost:5000/blog/add-blog", {
        title,
        image,
        content,
        gerne,
      })
      .then((res) => {
        if (res.ok) {
          setIsPosting(true);
          setSuccess(true);
        }
        console.log(res.status);
      });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    postBlog();
    if (success) {
      return redirect("/home");
    }
  };

  const modules = {
    toolbar: {
      container: "#toolbar",
    },
  };
  const formats = [
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "script",
    "header",
    "blockquote",
    "code-block",
    "indent",
    "list",
    "direction",
    "align",
    "link",
    "image",
    "video",
    "formula",
  ];
  return (
    <Fragment>
      <div className="container mt-5">
        <div className={`row ${classes.cardRow}`}>
          <div className={`col-3 ${classes.adminCard}`}>
            <h1>Add a new Blog</h1>
          </div>
          <div className={`col-3 ${classes.adminCard}`}>
            <h1>Delete a Blog</h1>
          </div>
          <div className={`col-3 ${classes.adminCard}`}>
            <h1>Modify a Blog</h1>
          </div>

          <div className={`${classes.addBlogForm}`}>
            <form className="form" onSubmit={submitHandler}>
              <label for="">Title</label>
              <input
                value={title}
                type="text"
                className="form-control"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <label for="">Upload Image</label>
              <input
                placeholder="Enter URL"
                value={image}
                type="string"
                className="form-control"
                onChange={(e) => {
                  setImage(e.target.value);
                }}
              />
              <label for="">Gerne</label>
              <select
                value={gerne}
                name="gernes"
                className="form-control"
                onChange={(e) => {
                  setGerne(e.target.value);
                }}
              >
                <option value="Blog">Blog</option>
                <option value="Poem">Poem</option>
                <option value="Thought">Thought</option>
                <option value="Story">Story</option>
              </select>
              <label for="">Content</label>
              <div className={classes.customizeQuill}>
                <CustomToolbar />
                <ReactQuill
                  formats={formats}
                  modules={modules}
                  value={description}
                  onChange={setDescription}
                  bounds={classes.customizeQuill}
                />
              </div>

              <div className={classes.submit}>
                {!isPosting ? (
                  <button>Submit</button>
                ) : (
                  `${!isPosting ? <p>Posting</p> : <p>Posted</p>}`
                )}
              </div>
            </form>
          </div>
        </div>
        <p>{gerne}</p>

        <div
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
          className={classes.content}
        />
        <img src={coverImage} />
      </div>
    </Fragment>
  );
};

export default AdminPage;
