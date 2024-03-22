import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../Store";

function PostDisplay() {
  const dispatch = useDispatch();

  const Posts = useSelector((state) => state.postReducer.posts);
  console.log(Posts, "Postus");
  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  return (
    <div className="container mx-auto font-poppins">
      <h2 className="text-2xl font-bold text-center mb-8">Posts</h2>

      <div
        className=" overflow-x-auto flex"
        style={{
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          cursor: "pointer",
        }}
      >
        {Posts?.map((post, index) => (
          <div key={index} className="p-4 md:w-1/3">
            <div className="h-fit border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={post.image}
                alt="blog"
              />
              <div className="p-6 pb-1">
                <h2 className="tracking-widest text-[10px] title-font font-medium text-gray-400 mb-1">
                  POST DATE - {post.date}
                </h2>
                <h1 className="title-font text-[13px] font-medium text-gray-900 mb-3">
                  {post.title}
                </h1>
                <p className="leading-relaxed mb-3 text-[11px]">
                  {post.description}
                </p>
              </div>
              <div className="m-2 "></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostDisplay;
