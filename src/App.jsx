"use client";
import React, { useRef, useState } from "react";
import "./App.css";
import circle from "./assets/circle.png";
import cross from "./assets/cross.png";

let data = ["", "", "", "", "", "", "", "", ""];

function App() {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let titleRef = useRef(null);

  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }

    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross}'>`;
      data[num] = "x";
      setCount(++count);
    } else {
      e.target.innerHTML = `<img src='${circle}'>`;
      data[num] = "o";
      setCount(++count);
    }
    checkWin();
  };

  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    }
  };

  const won = (winner) => {
    setLock(true);
    if (winner === "x") {
      titleRef.current.innerHTML = `winner is : <img src='${cross}'>`;
    } else if (winner === "o") {
      titleRef.current.innerHTML = `winner is : <img src='${circle}'>`;
    }
  };

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="h-screen w-auto flex flex-col justify-center items-center">
      <div>
        <h1
          className="h-fit w-fit p-1 text-7xl font-bold flex items-center"
          ref={titleRef}>
          TIC TAC TOE

        </h1>
      </div>
      <div className="w-fit mt-8 mb-8">
        <div className="row1 flex ">
          <div className="box" onClick={(e) => toggle(e, 0)}></div>
          <div className="box" onClick={(e) => toggle(e, 1)}></div>
          <div className="box" onClick={(e) => toggle(e, 2)}></div>
        </div>
        <div className="row2 flex ">
          <div className="box" onClick={(e) => toggle(e, 3)}></div>
          <div className="box" onClick={(e) => toggle(e, 4)}></div>
          <div className="box" onClick={(e) => toggle(e, 5)}></div>
        </div>
        <div className="row3 flex ">
          <div className="box" onClick={(e) => toggle(e, 6)}></div>
          <div className="box" onClick={(e) => toggle(e, 7)}></div>
          <div className="box" onClick={(e) => toggle(e, 8)}></div>
        </div>
      </div>
      <button className="h-fit text-2xl bg-box px-7 py-1 rounded-3xl text-white" onClick={refreshPage}>
        RESET
      </button>
    </div>
  );
}

// function WinnerImage(winner) {
//   if (winner == "x") return <image src={circle}></image>;
//   if (winner == "o") return <image src={cross}> </image>;
//   else {
//     return <></>;
//   }
// }
export default App;
