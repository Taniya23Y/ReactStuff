import { useContext, useEffect } from "react";
// import Blogs from "./components/Blogs";
// import Header from "./components/Header";
// import Pagination from "./components/Pagination";
import { AppContext } from "./Context/AppContext";
import { Routes, Route, useSearchParams, useLocation } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import TagPage from "./pages/TagPage";
import CategoryPage from "./pages/CategoryPage";
import HomePage from "./pages/HomePage";

export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;
    if (location.pathname.includes("tags")) {
      // iska matlab tag wala page show karna hai
      const tag = location.pathname.split("/").at(-1).replaceAll("-", "");
      fetchBlogPosts(Number(page), tag);
    } else if (location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-", "");
      fetchBlogPosts(Number(page), null, category);
    } else {
      fetchBlogPosts(Number(page));
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, location.search]);

  return (
    // <div className="App w-full h-full flex flex-col gap-y-1 justify-center items-center ">
    //   <Header />
    //   <Blogs />
    //   <Pagination />
    // </div>

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog/:blogId" element={<BlogPage />} />
      <Route path="/tags/:tag" element={<TagPage />} />
      <Route path="/category/:category" element={<CategoryPage />} />
    </Routes>
  );
}
