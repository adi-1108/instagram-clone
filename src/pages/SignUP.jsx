import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateCurrentUser,
} from "firebase/auth";

const SignUP = () => {
  const [email, setemail] = useState("");
  const [passowrd, setpassowrd] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const signUpHandler = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, passowrd);
      auth.currentUser ? updateCurrentUser(auth.currentUser , {displayName : userName}) : console.log("User not created");
      console.log("User Created");
      console.log("UserName is " , auth.currentUser.displayName )
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      currentUser ? navigate("/") : navigate("/signup");
    });
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden bg-slate-500">
      <h1 className="m-10 flex items-center justify-center align-middle text-5xl font-bold">
        SIGN UP PAGE
      </h1>
      <div>
        <form onSubmit={signUpHandler} action="">
          <div className="flex flex-col items-center justify-center gap-5">
            <input
              className="rounded-xl px-4 py-2 font-medium shadow-md focus:outline-none"
              type="text"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              placeholder="Enter the username"
            />
            <input
              className="rounded-xl px-4 py-2 font-medium shadow-md focus:outline-none"
              type="text"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              placeholder="Enter the Email"
            />
            <input
              className="rounded-xl px-4 py-2 font-medium shadow-md focus:outline-none"
              type="password"
              value={passowrd}
              onChange={(e) => {
                setpassowrd(e.target.value);
              }}
              placeholder="Enter the password"
            />

            <button className="rounded-lg bg-sky-600 px-4 py-2 font-bold text-white shadow-lg hover:border hover:border-black hover:bg-white hover:font-bold hover:text-black">
              Submit
            </button>
            <div className="flex items-center justify-between">
              <p className="text-slate-400">
                already have an account{" "}
                <a href="/signin" className="text-blue-700 hover:underline">
                  Login Here
                </a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUP;
