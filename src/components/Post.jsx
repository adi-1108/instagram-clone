import React from "react";
import { Heart, PersonFill, Save, Share } from "styled-icons/bootstrap";
import { DotsThreeHorizontal } from "styled-icons/entypo";
import { Comment } from "styled-icons/evil";

const Post = ({ name, userName, imageUrl, caption }) => {
  return (
    <div className="my-3 rounded-2xl bg-slate-200 p-2 shadow-lg">
      <div className="m-3">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div className="flex gap-3 ">
            <PersonFill width={40} className="mt-1" />
            <div className="flex-col leading-3">
              <h2 className="text-lg font-bold">{name}</h2>
              <p className="text-slate-400">{userName}</p>
            </div>
          </div>
          <DotsThreeHorizontal width={24} />
        </div>

        {/* Image Section */}
        <div>
          <img
            src={imageUrl}
            alt=""
            className="mt-5 h-fit w-fit rounded-2xl object-cover"
          />
        </div>

        {/* Likes / Comment / Share Section */}

        <div className="flex items-center justify-between px-1 py-4">
          <div className="flex items-center gap-5">
            <Heart width={24} />
            <Comment size={35} />
            <Share size={24} />
          </div>
          <Save width={24} />
        </div>

        {/* Caption Section */}

        <div>
          <div className="px-1">
            <p className="text-lg">
              <span className="font-bold">{userName} </span>
              {caption}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-3">
          <h2 className="text-md text-slate-400">Saturday, 03 June 2023</h2>
        </div>
      </div>
    </div>
  );
};

export default Post;
