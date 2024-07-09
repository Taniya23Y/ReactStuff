import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [name, setName] = useState("Taniya");

  // jis bhi component ke ander aap useEffect Hook likhte hain, Vo uss component ke render hone ke baad eske ander jo bhi code likha hoga use run karega.

  // Variation - 1 => Every Render it Runs
  //* useEffect(() => {
  //*   console.log("UI Rendering Done");
  //* });

  // Variation - 2 => Every Render it Runs
  // [] => it shows dependency list
  //*useEffect(() => {
  //*  console.log("UI Rendering Done");
  //*}, []);

  // Variation - 3 => whenever dependency changes, it Runs
  //* useEffect(() => {
  //*   console.log("Change Observed");
  //* }, [name]);

  // Variation - 4 => to handle unmounting of a component
  useEffect(() => {
    // add event listener
    console.log("listener added");

    return () => {
      console.log("listener removed");
    };
  }, [text]);

  // changeHandler function
  function changeHandler(event) {
    console.log(text);
    setText(event.target.value);
  }

  return (
    <div className="App">
      <input
        type="text"
        className="border-red-700 p-12px bg-slate-500 text-white text-5xl"
        onChange={changeHandler}
      ></input>
    </div>
  );
}

export default App;
