import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Spinner from "./Spinner";

const Blogs = () => {
  // consume
  const { posts, loading } = useContext(AppContext);
  return (
    <div className="w-11/12 max-w-[670px] py-8 flex justify-center items-center mx-auto flex-col gap-y-7 mt-[65px] mb-[70px]">
      {loading ? (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          <p className="text-center font-bold text-3xl">
            {" "}
            <Spinner />
          </p>
        </div>
      ) : posts.length === 0 ? (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          <p className="text-center font-bold text-3xl">No Blogs Found !</p>
        </div>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <p className="font-bold text-lg">{post.title}</p>
            <p className="text-sm">
              By <span className="italic">{post.author}</span> on{" "}
              <span className="underline font-bold">{post.category}</span>
            </p>
            <p className="text-sm mt-[4px]">Posted on {post.date}</p>
            <p className="text-md mt-[14px]">{post.content}</p>
            <div className="flex gap-x-3">
              {post.tags.map((tag, index) => {
                return (
                  <span
                    key={index}
                    className="text-blue-700 underline font-bold text-xs mt-[6px]"
                  >{`#${tag}`}</span>
                );
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;
