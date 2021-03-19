import Data from "./data.json";
import React from "react";
import "./App.css";
function App() {
  return (
    <div>
      {Data.map((data) => {
        return (
          <div className="card-container">
            <div className="image-container">{data.days}</div>
            <div className="card-title"></div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
