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
        {Posts?.posts?.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 mb-4 max-w-1/3 min-w-80 mx-3  "
          >
            <div className="h-fit border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                className="h-48 md:h-60 w-full object-cover object-center"
                src={post?.imageUrl}
                alt="blog"
              />
              <div className="p-6 pb-1">
                <h2 className="tracking-widest text-[10px] title-font font-medium text-gray-400 mb-1">
                  POST DATE - {post?.createdAt.slice(0, 10)}
                </h2>
                <h1 className="title-font text-[13px] font-medium text-gray-900 mb-3">
                  {post?.name}
                </h1>
                <p className="leading-relaxed mb-3 text-[11px]">
                  {post?.description}
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
