import { useContext, useEffect } from "react";
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import { AppContext } from "./Context/AppContext";

function App() {
  const { fetchBlogPosts } = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <div className="App w-full h-full flex flex-col gap-y-1 justify-center items-center ">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}

export default App;
