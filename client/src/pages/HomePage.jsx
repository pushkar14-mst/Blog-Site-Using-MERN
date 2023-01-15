import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./HomePage.module.css";
const HomePage = (props) => {
  const [blogPreview, setBlogPreview] = useState(false);

  return (
    <>
      <section>
        {props.data
          .sort((prev, next) => {
            return (
              next.dateCreated.slice(0, 10) - prev.dateCreated.slice(0, 10)
            );
          })
          .slice(0, 1)
          .map((blog) => {
            return (
              <div className={`${classes.latest} container`}>
                <div className="row">
                  <div
                    className={`${classes.mainTile} col-lg-12 col-md-12 col-sm-12`}
                  >
                    <div className={classes.image}>
                      <img
                        src={blog.coverImage}
                        className="img-fluid col-lg-12"
                        alt=""
                        width="100%"
                      />
                      <div className={classes.tag}>
                        <h1>{blog.blogGerne}</h1>
                      </div>
                      <div className={classes.mainBlogTitle}>
                        <h1>{blog.blogTitle}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

        <div className="container">
          <h1 id={classes.latestBlogH1}>Latest Blog's</h1>
          <div className="row">
            {props.data
              .sort((prev, next) => {
                return next.dateCreated - prev.dateCreated;
              })
              .slice(0, 4)
              .map((blog) => {
                return (
                  <div className="col-lg-6 col-md-100 col-sm-100">
                    <div
                      className={classes.listImages}
                      onClick={() => {
                        setBlogPreview(!blogPreview);
                      }}
                    >
                      <img src={blog.coverImage} alt="" className="img-fluid" />
                      <div className={classes.tag}>
                        <h1>{blog.blogGerne}</h1>
                      </div>
                      <div className={classes.title}>
                        <Link to={`/blogs/${blog._id}`}>
                          <h1>{blog.blogTitle}</h1>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
      <section id={classes.gerneBasedSection}>
        <div className={`conatiner ${classes.gernesContainer}`}>
          <div className="row">
            <div className="col-lg-6">
              <div className="container">
                <div className="row">
                  <h1>Poem</h1>
                  {props.data
                    .filter((obj) => {
                      return obj.blogGerne === "Poem";
                    })
                    .slice(0, 2)
                    .map((blog) => {
                      return (
                        <>
                          <div className="col-5">
                            <div className={classes.gerneImages}>
                              <Link to={`/blogs/${blog._id}`}>
                                <img
                                  src={blog.coverImage}
                                  alt=""
                                  className="img-fluid"
                                />
                              </Link>
                            </div>
                          </div>
                        </>
                      );
                    })}
                </div>
                <div className="row">
                  <h1>Blog</h1>
                  {props.data
                    .filter((obj) => {
                      return obj.blogGerne === "Blog";
                    })
                    .slice(0, 2)
                    .map((blog) => {
                      return (
                        <>
                          <div className="col-5">
                            <div className={classes.gerneImages}>
                              <Link to={`/blogs/${blog._id}`}>
                                <img
                                  src={blog.coverImage}
                                  alt=""
                                  className="img-fluid"
                                />
                              </Link>
                            </div>
                          </div>
                        </>
                      );
                    })}
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="container">
                <div className="row">
                  <h1>Thoughts</h1>
                  {props.data
                    .filter((obj) => {
                      return obj.blogGerne === "Thought";
                    })
                    .slice(0, 2)
                    .map((blog) => {
                      return (
                        <>
                          <div className="col-5">
                            <div className={classes.gerneImages}>
                              <Link to={`/blogs/${blog._id}`}>
                                <img
                                  src={blog.coverImage}
                                  alt=""
                                  className="img-fluid"
                                />
                              </Link>
                            </div>
                          </div>
                        </>
                      );
                    })}
                </div>
                <div className="row">
                  <h1>Stories</h1>
                  {props.data
                    .filter((obj) => {
                      return obj.blogGerne === "Story";
                    })
                    .slice(0, 2)
                    .map((blog) => {
                      return (
                        <>
                          <div className="col-5">
                            <div className={classes.gerneImages}>
                              <Link to={`/blogs/${blog._id}`}>
                                <img
                                  src={blog.coverImage}
                                  alt=""
                                  className="img-fluid"
                                />
                              </Link>
                            </div>
                          </div>
                        </>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id={classes.authorPreview}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-sm-12">
              <div className={classes.circle1}>
                <h1>Meet The Author</h1>
              </div>
              <div className={classes.circle2}>
                <img
                  src="https://www.pngpix.com/wp-content/uploads/2021/06/PNGPIX-COM-J-K-Rowling-PNG-Transparent-Image-1.png"
                  alt=""
                />
              </div>
              <div className={classes.circle3}>
                <h1>Joanne Rowling</h1>
              </div>
            </div>
            <div className={`col-lg-5 col-sm-12 ${classes.authorPreviewText}`}>
              <p>
                Joanne Rowling was born on 31st July 1965 at Yate General
                Hospital near Bristol, and grew up in Gloucestershire in England
                and in Chepstow, Gwent, in south-east Wales. Her father, Peter,
                was an aircraft engineer at the Rolls Royce factory in Bristol
                and her mother, Anne, was a science technician in the Chemistry
                department at Wyedean Comprehensive, where Jo herself went to
                school. Anne was diagnosed with multiple sclerosis when Jo was a
                teenager and died in 1990, before the Harry Potter books were
                published. Jo also has a younger sister, Di. The young Jo grew
                up surrounded by books. “I lived for books,’’ she has said. “I
                was your basic common-or-garden bookworm, complete with freckles
                and National Health spectacles.” Jo wanted to be a writer from
                an early age. She wrote her first book at the age of six – a
                story about a rabbit, called ‘Rabbit’. At just eleven, she wrote
                her first novel – about seven cursed diamonds and the people who
                owned them. Jo studied at Exeter University, where she read so
                widely outside her French and Classics syllabus that she clocked
                up a fine of £50 for overdue books at the University library.
                Her knowledge of Classics would one day come in handy for
                creating the spells in the Harry Potter series, some of which
                are based on Latin. Her course included a year in Paris. “I
                lived in Paris for a year as a student,” Jo tweeted after the
                2015 terrorist attacks there. “It’s one of my favourite places
                on earth.” Jo conceived the idea of Harry Potter in 1990 while
                sitting on a delayed train from Manchester to London King’s
                Cross. Over the next five years, she began to map out all seven
                books of the series. She wrote mostly in longhand and gradually
                built up a mass of notes, many of which were scribbled on odd
                scraps of paper. Taking her notes with her, she moved to
                northern Portugal to teach English as a foreign language,
              </p>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
