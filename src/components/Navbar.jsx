import React from "react";
import { Home } from "styled-icons/boxicons-solid";
import { Messenger } from "styled-icons/boxicons-logos";
import { Compass, Heart, PersonFill, PlusLg } from "styled-icons/bootstrap";
import SearchBar from "./SearchBar";

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
