import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removePosts } from "../store/postsSlice";
import { X } from "lucide-react";

const CardView = ({ isListView }) => {
  const { posts, currentPage } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const startIndex = (currentPage - 1) * 6;
  const displayPosts = posts.slice(startIndex, startIndex + 6);

  console.log(displayPosts, "displayPosts++++++++");

  const handleRemove = (id) => {
    dispatch(removePosts(id));
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  const formatBody = (body) => {
    return body.replace(/\\n/g, "").trim();
  };

  useEffect(() => {
    console.log(posts, "posts");
  }, [posts]);

  return (
    <div
      className={`grid ${isListView ? "grid-cols-1" : "grid-cols-2"} gap-4 p-4`}
    >
      {displayPosts.map((post) => (
        <div
          key={post.id}
          className="bg-white rounded-lg shadow-md p-4 relative hover:shadow-lg transition-shadow"
        >
          <button
            onClick={() => {
              handleRemove(post?.id);
            }}
            className="absolute top-2 right-2 text-red-500 hover:text-red-700 transition-colors"
            aria-label="Remove post"
          >
            <X size={20} />
          </button>
          <div className="mb-2">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
              User {post.id}
            </span>
          </div>
          <h3 className="font-semibold mb-2 text-lg text-gray-800">
            {truncateText(post?.title, 100)}
          </h3>

          <p className="text-gray-600 mb-4">
            {truncateText(formatBody(post.body), 150)}
          </p>

          <div className="text-sm text-gray-500 mt-2 flex justify-between items-center">
            <span>Post #{post.id}</span>
            <span>Mon, 21 Dec 2020 14:57 GMT</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardView;
