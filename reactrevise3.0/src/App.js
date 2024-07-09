import { useState } from "react";
import "./App.css";

function App() {
  // state management
  const [count, setCount] = useState(0);

  // decreaseHandler function
  function decreaseHandler() {
    setCount(count - 1);
  }

  // increaseHandler function
  function increaseHandler() {
    setCount(count + 1);
  }

  // resetHandler function
  function resetHandler() {
    setCount(0);
  }

  return (
    <div className="App w-[100vw] h-[100vh] bg-[#344151] flex justify-center items-center gap-10 flex-col">
      <div className="text-3xl text-[#0398d4] font-medium">
        Increment & Decrement
      </div>
      <div className="bg-white flex justify-center rounded-sm text-[25px] gap-12 py-3 text-[#344151]">
        <button
          onClick={decreaseHandler}
          className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl"
        >
          -
        </button>
        <div className="text-bold text-5xl gap-12">{count}</div>
        <button
          onClick={increaseHandler}
          className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl"
        >
          +
        </button>
      </div>
      <button
        onClick={resetHandler}
        className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg"
      >
        Reset
      </button>
    </div>
  );
}

export default App;
