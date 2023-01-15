import { Fragment, useState, useEffect } from "react";
import Header from "./components/UI/Header";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import BlogDetailPage from "./pages/BlogDetailPage";
import AdminPage from "./pages/AdminPage";
import axios from "axios";

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getAllBlogs();
  }, []);

  const getAllBlogs = async () => {
    await axios
      .get("http://localhost:5000/blogs")
      .then((response) => setBlogs(response.data));
    //console.log(tweets);
  };
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route
          path="/home"
          element={<HomePage data={blogs} autoRefresh={getAllBlogs} />}
        />
        <Route
          path="/blogs/:blogId"
          element={<BlogDetailPage data={blogs} />}
        />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
