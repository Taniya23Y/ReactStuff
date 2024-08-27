import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import Header from "../components/Header";
import BlogDetails from "../components/BlogDetails";
import Spinner from "../components/Spinner";
// import { baseUrl } from "../baseUrl";

const BlogPage = () => {
  const [blog, setBlog] = useState(null);
  const [relatedblog, setRelatedblog] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const { loading, setLoading } = useContext(AppContext);
  const blogId = location.pathname.split("/").at(-1);
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedblog(data.relatedBlogs);
    } catch (err) {
      console.log(err);
      setBlog(null);
      setRelatedblog([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <div>
      <Header />
      <div>
        <button onClick={() => navigation(-1)}>Back</button>
      </div>
      <div>
        {loading ? (
          <p>
            <Spinner />
          </p>
        ) : blog ? (
          <div>
            <BlogDetails post={blog} />
            <h2>Related Blogs</h2>
            {relatedblog.map((post) => (
              <div key={post.id}>
                <BlogDetails post={post} />
              </div>
            ))}
          </div>
        ) : (
          <p>No Blog Found</p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
