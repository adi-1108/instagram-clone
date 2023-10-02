import React, {useEffect} from "react";
// import { signUpFunc } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../firebase";
import {onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";

const SignIN = () => {
  const [email, setemail] = useState("");
  const [passowrd, setpassowrd] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const signinHandler = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, passowrd);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onAuthStateChanged (auth, (currentUser) => {
      currentUser ? navigate("/") : navigate("/signin");
    });
  }, []);
  return (
    <div className="h-screen w-screen overflow-hidden bg-red-100">
      <h1 className="m-10 flex items-center justify-center align-middle text-5xl font-bold">
        SIGN IN PAGE
      </h1>
      <div>
        <form onSubmit={signinHandler} action="">
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
                New User?{" "}
                <a href="/signup" className="text-blue-700 hover:underline">
                  Create Account
                </a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIN;
