import React, { useState } from "react";
import { signUpFunc } from "../firebase";

const SignUP = () => {
  const [email, setemail] = useState("");
  const [passowrd, setpassowrd] = useState("");
  const [userName, setUserName] = useState("");
  return (
    <div>
      <div>
        <form onSubmit={signUpFunc} action="">
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
          </div>
        </form>

        <button className="bg-sky-200 px-4 py-2 font-bold text-white">
          Submit
        </button>
      </div>
    </div>
  );
};

export default SignUP;
