// context API
//* |--> create context()
//* |--> provider
//* |--> consume

import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

//* |--> create context()
export const AppContext = createContext();
// AppContext is the context API object that we will use to share data between components.
// We can use this object to create a provider and a consumer.

//* |--> provider
export default function AppContextProvider({ children }) {
  // state variables
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  // Fetch Blog Data filling
  async function fetchBlogPosts(page = 1) {
    setLoading(true);

    let url = `${baseUrl}?page=${page}`;

    try {
      const result = await fetch(url);
      const data = await result.json();
      //   if (!data.posts || data.posts.length === 0)
      //     throw new Error("Something Went Wrong");
      console.log("Api Response", data);
      setPage(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.log("Error in Fetching BlogPosts", error);
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }
    setLoading(false);
  }

  // Handle When Next and Previous button are clicked
  function handlePageChange(page) {
    // navigate({ search: `?page=${page}` });
    setPage(page);
    fetchBlogPosts(page);
  }

  // create a object
  const value = {
    posts,
    setPosts,
    loading,
    setLoading,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogPosts,
    handlePageChange,
  };

  // return your provider
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
