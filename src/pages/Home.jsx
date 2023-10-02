import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Feed from "../components/Feed";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const Home = () => {
  const [user, setuser] = useState(undefined);
  const navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) => {
    currentUser ? setuser(currentUser) : navigate("/signup");
  });
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

export default Home;
