import React from "react";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";

const App = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="side-margin">
        <Feed />
      </div>
    </div>
  );
};

export default App;
