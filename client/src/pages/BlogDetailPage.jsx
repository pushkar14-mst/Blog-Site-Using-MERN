import DOMPurify from "dompurify";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import classes from "./BlogDetailPage.module.css";

const BlogDetailPage = (props) => {
  const params = useParams();

  return (
    <>
      {props.data
        .filter((identifiedBlog) => {
          return identifiedBlog._id == params.blogId;
        })
        .map((blog) => {
          return (
            <>
              <section id={classes.blogDetailSection}>
                <div className="container text-center">
                  <h1 className={classes.blogHeader}>{blog.blogTitle}</h1>
                  <h5 className={classes.writtenBy}>-by Sanny</h5>
                  <div className="row">
                    <div className="col">
                      <img
                        src={blog.coverImage}
                        alt=""
                        className={`img-responsive col-12 ${classes.coverImage}`}
                      />
                    </div>
                  </div>
                  <div className={classes.blogGerne}>{blog.blogGerne}</div>

                  <div className="row">
                    <div className="col">
                      <div
                        className={classes.blogContent}
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(blog.blogContent),
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </section>
            </>
          );
        })}
    </>
  );
};
export default BlogDetailPage;
