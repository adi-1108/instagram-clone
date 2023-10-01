import React from "react";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import SignUP from "./pages/SignInP";

const App = () => {
  return (
    <div>
      {/* <div>
        <Navbar />
      </div>

      <div className="side-margin">
        <Feed />
      </div> */}

      <div>
        <SignUP />
      </div>
    </div>
  );
};

export default App;
