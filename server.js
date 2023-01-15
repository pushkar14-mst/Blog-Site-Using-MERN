const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
mongoose.connect("mongodb://localhost:27017/blogsDB");

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

const blogSchema = new mongoose.Schema({
  blogTitle: { type: String },
  blogGerne: { type: String },
  coverImage: { type: String },
  blogContent: { type: String },
  dateCreated: { type: Date, default: Date.now, required: true },
});

const Blog = mongoose.model("Blog", blogSchema);

app.get("/blogs", async (req, res) => {
  const allBlogs = Blog.find({ coverImage: { $ne: null } }, (err, blogs) => {
    res.json(blogs);
  });
});

app.post("/blog/add-blog", async (req, res) => {
  const blogTitle = req.body.title;
  const blogGerne = req.body.gerne;
  const coverImage = req.body.image;
  const blogContent = req.body.content;

  try {
    const blog = new Blog({
      blogTitle,
      blogGerne,
      coverImage,
      blogContent,
    });
    const createdBlog = await blog.save();
    res.status(201).json({
      status: "Success",
      data: {
        createdBlog,
      },
    });
    console.log(blog);
  } catch (err) {
    console.log(err);
  }
});

app.listen(5000, () => {
  console.log("port started on 5000");
});
