import React from "react";
import { Home } from "styled-icons/boxicons-solid";
import { Messenger } from "styled-icons/boxicons-logos";
import { Compass, Heart, PersonFill, PlusLg } from "styled-icons/bootstrap";
import SearchBar from "./SearchBar";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Navbar = () => {
  return (
    <div className="shadow-md">
      <div className="side-margin">
        <div className="flex items-center justify-between py-4">
          <div>
            <h2 className="font-mono text-2xl font-semibold">CutieGram</h2>
          </div>

          <div>
            <SearchBar />
          </div>

          <div className="flex items-center justify-normal gap-5">
            <Home width={26} />
            <Messenger width={26} />
            <PlusLg width={26} />
            <Compass width={26} />
            <Heart width={26} />
            <PersonFill width={26} />
            <button
              onClick={() => {
                signOut(auth);
              }}
              className="rounded-xl bg-blue-500 px-4 py-2 font-bold text-white shadow-lg hover:border hover:border-black hover:bg-white hover:font-bold hover:text-black"
            >
              Sign-Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
