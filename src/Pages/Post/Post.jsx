import React from "react";
import PostDisplay from "./PostDisplay";

function Posts() {
  return (
    <div className="font-poppins font-light px-5 md:px-10 lg:px-20 xl:px-36 justify-center items-center my-5">
      <PostDisplay />
      <div className="flex flex-col md:flex-row gap-12 justify-between items-center"></div>
    </div>
  );
}

export default Posts;
