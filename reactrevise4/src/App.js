import "./App.css";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl, filterData } from "./data";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

const App = () => {
  // const [courses, setCourses] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const output = await response.json();
      // save data into a variable
      setCourses(output.data);
    } catch {
      toast.error("Something went wrong");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <div className="App bg-slate-300 min-h-screen flex flex-col">
      <div>
        <Navbar />
      </div>
      <div className="bg-slate-300">
        <div>
          <Filter
            filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
        </div>
        <div className="w-11/12 flex flex-wrap max-w-[1200px] mx-auto justify-center items-center min-h-[50vh]">
          {/* {loading ? <Spinner /> : <Cards courses={courses} />} */}
          {/* {loading ? (
            <Cards courses={courses} category={category} />
          ) : (
            <Spinner />
          )} */}

          <Cards courses={courses} category={category} />
        </div>
      </div>
    </div>
  );
};

export default App;
