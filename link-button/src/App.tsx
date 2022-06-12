import React, { useState } from "react";
import "./App.css";

function LikeButton() {
  const [count, setCount] = useState(999);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <span className="likeButton" onClick={handleClick}>
      ♡ {count}
    </span>
  );
}

function App() {
  return (
    <div className="App-header">
      <LikeButton />
    </div>
  );
}

export default App;
