import React from "react";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div>
        <Blogs />
        <Pagination />
      </div>
    </div>
  );
};

export default HomePage;
