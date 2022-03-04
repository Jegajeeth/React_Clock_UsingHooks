import React, { useState } from "react";

function App() {
  function changeTime() {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }
  const [Time, setTime] = useState("Time");

  return (
    <div className="container">
      <h1 className="time">{Time}</h1>
      <button onClick={changeTime}>Get Time</button>
    </div>
  );
}

export default App;
