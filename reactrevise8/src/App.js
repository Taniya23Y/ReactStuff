import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import MainHeader from "./components/MainHeader";
import Labs from "./components/Labs";
import Support from "./components/Support";

import { Routes, Route, Link, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Home />
      <About />
      <Support />
      <Labs /> */}

      <nav className=" w-full h-full top-0 pt-10 justify-center text-white  flex items-center gap-10 flex-row">
        <ul className="flex p-5 rounded-md gap-10 bg-black w-3/3 items-center justify-center fixed">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
          <li>
            <NavLink to="/labs">Labs</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<MainHeader />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/*" element={<div>404 Not found</div>} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
